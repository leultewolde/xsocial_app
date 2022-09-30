const { Router } = require("express");
const TaskController = require("./controllers/TaskController");

const route = Router();

route.post("/tasks", TaskController.AddTask);
route.get("/tasks/:id", TaskController.FetchOneTask);
route.get("/tasks", TaskController.FetchAllTasks);
route.put("/tasks/:id", TaskController.UpdateOneTask);
route.delete("/tasks/:id", TaskController.DeleteOneTask);

module.exports = route;
