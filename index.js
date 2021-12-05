const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/resume", (req, res) => {
    res.render("/html/resume");
});  

app.get("/blog", (req, res) => {
    res.render("/html/blog");
});

app.get("/index", (req, res) => {
  res.render("/html/index");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
