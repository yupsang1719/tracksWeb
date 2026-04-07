require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");

async function seedAdmin() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  await Admin.deleteMany({});

  await Admin.create({
    email: "funkyend51@gmail.com",
    password: "Griash1719!!",
  });

  console.log("Admin user created: funkyend51@gmail.com");
  await mongoose.disconnect();
}

seedAdmin().catch((err) => {
  console.error(err);
  process.exit(1);
});
