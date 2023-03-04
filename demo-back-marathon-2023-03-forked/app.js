const express = require("express");
const cors = require("cors");
const { slidesController } = require("./controllers");

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

//----- DEMO START ----------------------------
function rootController(request, response) {
  response.status(200).send("Hello, World!");
}

app.get("/", rootController);
//----- DEMO END ------------------------------

function userController(request, response) {
  response.status(200).send("Stanislav");
}

app.get("/name", userController);

app.get("/slides", slidesController.getSlides);

module.exports = app;
