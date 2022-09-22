const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//route
const taskRoutes = require("./routes/tasksRoutes");

//express
const app = express();

//connect to mongo DB
const dbURI =
  "mongodb+srv://Upol:Upol1234@cluster0.j5xzxvp.mongodb.net/TLDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set("view engine", "ejs");

//middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//get
app.get("/", (req, res) => {
  res.redirect("/tasks");
});

//task routes
//blog routes
app.use("/tasks", taskRoutes);
