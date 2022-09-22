const Task = require("../model/tasksModel");

const getTask = (req, res) => {
  Task.find()
    .then((result) => {
      res.render("index", { title: "Add Tasks", tasks: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const createTask = (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteTask = (req, res) => {
  const id = req.params.id;

  Task.findByIdAndDelete(id)
    .then((result) => {
      console.log(id);
      res.json({ redirect: "/tasks" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getTask,
  createTask,
  deleteTask,
};
