const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.get("/", taskController.getTask);
router.post("/", taskController.createTask);
//delete
router.delete("/:id", taskController.deleteTask);

module.exports = router;
