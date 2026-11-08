const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid"); // unique id
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 5500;
const HOST = process.env.HOST || "localhost";
const todosAPI = "http://localhost:2001/todos"; // json-server

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use("/api/v1/todos", limiter); // example usage

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(todosAPI);
    console.log("response", response);
    const { data, status, statusText } = response;
    res.json({ data, status, message: statusText });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
});
app.use(express.json());
// Get all todos by search and limit
// http://localhost:5500/todos?search=Hello&limit=10
app.get("/todos", async (req, res) => {
  try {
    const response = await axios.get(todosAPI);
    // console.log('response', response)
    const { search, limit } = req.query;
    console.log("search", search);
    let todos = response.data; // todos from db.json // assigned to todos
    if (search) {
      todos = todos.filter(
        (todo) =>
          (todo.title &&
            todo.title.toLowerCase().includes(String(search).toLowerCase())) ||
          String(todo.completed) === String(search).toLowerCase(),
      ); // re-assign
      // console.log('todos', todos)
      if (todos.length === 0) {
        return res
          .status(200)
          .json({ data: todos, success: true, message: "Todos Not Found" });
      }
    }
    if (limit) {
      // limit the number of todos (overwrite todos)
      todos = todos.slice(0, parseInt(limit)); // re-assign
    }
    res.status(200).json({
      data: todos,
      success: true,
      message: "Todos fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
});

app.get("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  console.log("todoId =>", todoId);
  try {
    const response = await axios.get(`${todosAPI}/${todoId}`);
    const { data, status, statusText } = response;
    return res.json({ data, success: status, message: statusText });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      message: `Todo Not Found with id: ${todoId}`,
    });
  }
});

// Create a new todo
app.post("/todos", async (req, res) => {
  console.log("req.body", req.body);
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required", success: false });
  }
  if (title.trim().length < 4) {
    return res
      .status(400)
      .json({ error: "Title must be at least 4 characters", success: false });
  }
  if (completed !== true && completed !== false) {
    return res
      .status(400)
      .json({ error: "Completed must be true or false", success: false });
  }
  const newTodo = {
    ...req.body,
    id: uuidv4(),
    title: title.trim().toUpperCase(),
    completed,
  };
  try {
    const response = await axios.post(todosAPI, newTodo);
    res
      .status(201)
      .json({ data: response.data, success: true, message: "Success" });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

// Update a todo
app.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const oldTodo = await axios.get(`${todosAPI}/${id}`);
    const { title, completed } = req.body;

    if (title && title.trim().length < 4) {
      return res
        .status(400)
        .json({ error: "Title must be at least 4 characters", success: false });
    }
    if (completed !== undefined && completed !== true && completed !== false) {
      return res
        .status(400)
        .json({ error: "Completed must be true or false", success: false });
    }
    const updatedTodo = { ...oldTodo.data };
    if (title) updatedTodo.title = title.trim().toUpperCase();
    if (completed !== undefined) updatedTodo.completed = completed;
    // const updatedTodo = Object.assign(oldTodo.data, req.body);
    console.log("updatedTodo", updatedTodo);
    const response = await axios.put(`${todosAPI}/${id}`, updatedTodo);
    res
      .status(200)
      .json({ data: response.data, success: true, message: "Success" });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
});

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await axios.delete(`${todosAPI}/${id}`);
    return res.status(200).json({ message: "delete success" });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
});
