// models/userModel.js
const db = require("../config/database");
const bcrypt = require("bcrypt");
// User::create('John Doe', 'john@example.com', 'password123');
class User {
  // find all users
  static async getAll() {
    try {
      const [users] = await db.query("SELECT * FROM users");
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
  // create user
  static async create(name, email, password) {
    try {
      let oldUser = await User.findByEmail(email);
      if (oldUser) {
        throw new Error("User already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await db.query(
        "INSERT INTO users (name, email,password,create_time) VALUES (?,?,?,?)",
        [name, email, hashedPassword, new Date()],
      );
      return result.insertId;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  static async findByEmail(email) {
    try {
      const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      console.log("user", user);
      return user[0];
    } catch (error) {
      console.error("Error finding user by email:", error);
      throw error;
    }
  }
  // find user by id
  static async findById(id) {
    try {
      const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
      console.log("user", user);
      return user[0]; // index[0] = first element(object)
    } catch (error) {
      console.error("Error finding user by ID:", error);
      throw error;
    }
  }
  // update user
  static async update(id, name, email) {
    try {
      await db.query("UPDATE users SET name = ?, email = ?  WHERE id = ?", [
        name,
        email,
        id,
      ]);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
  // delete user
  static async delete(id) {
    try {
      await db.query("DELETE FROM users WHERE id = ?", [id]);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}
module.exports = User;

// ဒီ code က User model ကို ဖန်တီးထားတာဖြစ်ပါတယ်။

// create() method
// အသုံးပြုသူအသစ်တစ်ယောက်ကို database ထဲသို့ ထည့်သွင်းပေးပါတယ်။
// name, email နဲ့ password တွေကို parameter အနေနဲ့ လက်ခံပြီး database ထဲကို ထည့်ပေးပါတယ်။
// အောင်မြင်ရင် ထည့်သွင်းလိုက်တဲ့ user ရဲ့ ID ကို ပြန်ပေးပါတယ်။

// findAll() method
// database ထဲက user အားလုံးကို ရှာဖွေပြီး ပြန်ပေးပါတယ်။

// findById(id) method
// ID တစ်ခုပေးလိုက်ရင် အဲ့ဒီ ID နဲ့ ကိုက်ညီတဲ့ user ကို ရှာဖွေပြီး ပြန်ပေးပါတယ်။

// update(id, name, email) method
// ID တစ်ခုပေးလိုက်ရင် အဲ့ဒီ ID နဲ့ ကိုက်ညီတဲ့ user ရဲ့ name နဲ့ email ကို update လုပ်ပေးပါတယ်။

// delete(id) method
// ID တစ်ခုပေးလိုက်ရင် အဲ့ဒီ ID နဲ့ ကိုက်ညီတဲ့ user ကို database ထဲကနေ ဖျက်ပစ်ပါတယ်။

// ဒီ method တွေအားလုံးမှာ try-catch block တွေသုံးထားပြီး error ဖြစ်ခဲ့ရင် console မှာ error message ပြပေးပါတယ်။

// နောက်ဆုံးမှာ User model ကို export လုပ်ထားပါတယ်။ ဒါကြောင့် တခြား file တွေကနေ ဒီ model ကို import လုပ်ပြီး သုံးလို့ရပါတယ်။
