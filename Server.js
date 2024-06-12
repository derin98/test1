/**
 * This file will be the start point of the application.
 */
const serverConfig = { PORT: 3000 };
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//Starting the server

app.listen(serverConfig.PORT, () => {
  console.log(`Application started on the port num : ${serverConfig.PORT}`);
});
