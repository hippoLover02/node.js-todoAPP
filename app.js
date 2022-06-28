const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config();

app.use(express.json());
app.use(express.static("./public/"));

const PORT = 5000;

// route setting
app.use("/api/v1/tasks", taskRoute);
// app.use("/api/v1/tasks", authRoute);
// app.use("/api/v1/tasks", productRoute);

// connect to DB
const start = async () => {
  try {
    app.listen(process.env.PORT || PORT, console.log("server is up"));
    await connectDB(process.env.MONGO_HEROKU_URL || process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
  }
}

start();
