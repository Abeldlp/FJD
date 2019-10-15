const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

//MIDDLEWARE SETTINGS

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
app.get("/", (req, res) => {
  res.sendfile("/index.html");
});

app.get("/index.html", (req, res) => {
  res.sendfile("index.html");
});

app.get("/pages/constructions.html", (req, res) => {
  res.sendfile("pages/constructions.html");
});

app.get("/pages/whoarewe.html", (req, res) => {
  res.sendfile("pages/whoarewe.html");
});

app.get("/pages/contact.html", (req, res) => {
  res.sendfile("pages/contact.html");
});

//SETTING PORT
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
