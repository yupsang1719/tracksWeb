const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  const adminExists = await Admin.findOne({ email: "funkyend51@gmail.com" });
  if (adminExists) {
    console.log("Admin already exists");
    return process.exit();
  }

  const newAdmin = new Admin({
    email: "funkyend51@gmail.com",
    password: "admin123", // Will be hashed automatically
  });

  await newAdmin.save();
  console.log("Admin created successfully");
  process.exit();
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});
