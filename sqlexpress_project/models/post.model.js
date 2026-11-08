const db = require("../config/database");
class Post {
  static async getAll(limit = 10, offset = 0) {
    try {
      const [rows] = await db.query(
        "SELECT posts.*, users.name AS author FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY posts.id DESC LIMIT ? OFFSET ?",
        [Number(limit), Number(offset)],
      );
      console.log("rows :>> ", rows.length);
      return rows;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  // find all posts with pagination
  static async getAuthorPosts(userId, limit = 5, offset = 0) {
    try {
      const [rows] = await db.query(
        "SELECT posts.*, users.name AS author FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.user_id = ? ORDER BY posts.id DESC LIMIT ? OFFSET ?",
        [userId, limit, offset],
      );
      console.log("rows :>> ", rows.length);
      return rows;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
  // create new post
  static async create(userId, title, content, photo) {
    const currentTime = new Date();
    // console.log('currentTime', currentTime);
    try {
      const [result] = await db.query(
        "INSERT INTO posts (user_id, title, content, photo, create_time) VALUES (?, ?, ?, ?, ?)",
        [userId, title, content, photo, currentTime],
      );
      console.log("Post created with ID:", result.insertId);
      return result.insertId;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  // find post by id
  static async findById(id) {
    try {
      const [rows] = await db.query(
        "SELECT posts.*, users.name AS author FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = ?",
        [id],
      );
      console.log("rows", rows);
      // return rows;
      return rows[0]; // index[0] = first element(object)
    } catch (error) {
      console.error("Error finding post by ID:", error);
      throw error;
    }
  }
  // update post
  static async update(id, title, content, photo) {
    try {
      await db.query(
        "UPDATE posts SET title = ?, content = ?, photo = ? WHERE id = ?",
        [title, content, photo, id],
      );
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      await db.query("DELETE FROM posts WHERE id = ?", [id]);
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
    }
  }

  // Search posts by title or content with pagination
  static async search(query, limit = 5, offset = 0) {
    try {
      const [rows] = await db.query(
        `SELECT posts.*, users.name AS author FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE posts.title LIKE ? OR posts.content LIKE ? ORDER BY posts.id DESC LIMIT ? OFFSET ?`,
        ["%" + query + "%", "%" + query + "%", Number(limit), Number(offset)],
      );
      return rows;
    } catch (error) {
      console.error("Error searching posts:", error);
      throw error;
    }
  }

  // Count all posts
  static async countAll() {
    try {
      const [rows] = await db.query("SELECT COUNT(*) as count FROM posts");
      return rows[0].count;
    } catch (error) {
      console.error("Error counting posts:", error);
      throw error;
    }
  }

  // Count author posts
  static async countAuthorPosts(userId) {
    try {
      const [rows] = await db.query(
        "SELECT COUNT(*) as count FROM posts WHERE user_id = ?",
        [userId],
      );
      return rows[0].count;
    } catch (error) {
      console.error("Error counting author posts:", error);
      throw error;
    }
  }

  // Count search results
  static async countSearch(query) {
    try {
      const [rows] = await db.query(
        "SELECT COUNT(*) as count FROM posts WHERE title LIKE ? OR content LIKE ?",
        ["%" + query + "%", "%" + query + "%"],
      );
      return rows[0].count;
    } catch (error) {
      console.error("Error counting search posts:", error);
      throw error;
    }
  }
}
module.exports = Post;

// ဒီ code က Post ဆိုတဲ့ class တစ်ခုကို သတ်မှတ်ထားပါတယ်။
// ဒီ class ထဲမှာ post တွေကို create လုပ်တာ၊ ရှာတာ၊ update လုပ်တာနဲ့ delete လုပ်တာတွေ ပါဝင်ပါတယ်။

// create method
// ဒီ method က post အသစ်တစ်ခုကို database ထဲ ထည့်ပေးပါတယ်။
// userId, title, content နဲ့ photo တွေကို parameter အနေနဲ့ လက်ခံပါတယ်။
// အောင်မြင်ရင် အသစ်ထည့်လိုက်တဲ့ post ရဲ့ ID ကို return ပြန်ပေးပါတယ်။

// findAll method
// ဒီ method က database ထဲက post အားလုံးကို ရှာပေးပါတယ်။
// post တွေကို user table နဲ့ join လုပ်ပြီး author name ကိုပါ ထည့်ပေးပါတယ်။

// findById method
// ဒီ method က ID တစ်ခုပေးလိုက်ရင် အဲဒီ ID နဲ့ ကိုက်ညီတဲ့ post ကို ရှာပေးပါတယ်။
// post information အပြင် author name ကိုပါ ထည့်ပေးပါတယ်။

// update method
// ဒီ method က post တစ်ခုကို update လုပ်ပေးပါတယ်။
// ID, title, content နဲ့ photo တွေကို parameter အနေနဲ့ လက်ခံပါတယ်။
// photo ပါရင် photo ပါ update လုပ်ပြီး၊ မပါရင် title နဲ့ content ပဲ update လုပ်ပါတယ်။

// delete method
// ဒီ method က ID တစ်ခုပေးလိုက်ရင် အဲဒီ ID နဲ့ ကိုက်ညီတဲ့ post ကို delete လုပ်ပေးပါတယ်။

// ဒီ class ထဲက method တွေအားလုံးက async ဖြစ်ပြီး၊ database query တွေကို await နဲ့ ခေါ်သုံးထားပါတယ်။
// error ဖြစ်ရင် console မှာ error message ပြပြီး၊ error ကို throw လုပ်ပါတယ်။
