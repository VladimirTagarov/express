const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");
const loggerTwo = require("./middlewares/loggerTwo");

dotenv.config();

mongoose
  .connect("mongodb://localhost:27017/backend")
  .catch((error) => console.log(error));

const app = express();

const { PORT, API_URL } = process.env;

app.use(cors);
app.use(loggerOne);
app.use(loggerTwo);

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello, World!");
});

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST!");
});

app.get("/users/34", (request, response) => {
  response.status(200);
  response.send("User with id: 68");
});

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
