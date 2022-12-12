const express = require("express");
const mongoose = require("mongoose");
const app = express();
const categoryRouter = require("./routes/categoryRouter");
const cors = require("cors");

//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//DB connection
const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.a1jplbz.mongodb.net/MERN-ECOMMERCE"
    );
    console.log("Connection to database established");
    return connect;
  } catch (err) {
    return console.log(err);
  }
};

dbConnection();

//Routes
app.use("/api/v1", categoryRouter);

app.listen(8000, () => {
  console.log("Listening to port 8000");
});
