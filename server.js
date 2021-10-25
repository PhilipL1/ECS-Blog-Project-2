const express = require("express");
const app = express();
const expbs = require("express-handlebars");

app.set("view engine", "hbs");

app.use(express.static("public"));

const hbs = expbs.create({
  defaultLayout: "main",
  layoutsDir: "views/layouts",
  partialsDir: "views/partials",
  extname: ".hbs",

  //create a cutome helper
  helpers: {
    calculation: function (value) {
      return value * 10;
    },
  },
});

app.engine("hbs", hbs.engine);
//path.join(__dirname,
// Handlebars.registerPartial("header", "{{prefix}}");

app.get("/", (req, res) => {
  createApp = {
    user: {
      title: "Test Article",
      createAt: Date.now(),
      description: "Test description",
    },
    style: "style.css",
  };
  res.render("index", createApp);
});

app.get("/about", (req, res) => {
  people = {
    person: [{ firstName: "Philip" }, { lastName: "Lartey" }],
    age: 25,
    Job: "DevOp Engineer",
    style: "about.css",
  };
  res.render("about", people);
});

app.get("/page", (req, res) => {
  res.render("page");
});
app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(8000, () => {
  console.log("Server is starting at port wait.. ", 8000);
});
