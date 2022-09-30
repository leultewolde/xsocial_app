const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function AddTask(req, res) {
  try {
    const tasksdata = await prisma.tasks.create({
      data: {
        title: req.body.title,
        description: req.body.description,
      },
    });

    console.log(tasksdata);

    return res
      .status(201)
      .json({ msg: "Task Registration successfully Completed!" });
  } catch (error) {
    return res.status(400).json({ msg: "Unsuccessful Task Registration" });
  }
}

async function FetchAllTasks(req, res) {
  try {
    const tasksdata = await prisma.tasks.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      },
    });

    return res.status(201).json(tasksdata);
  } catch (error) {
    return res.status(400).json({ msg: "Error Fetching Tasks" });
  }
}

async function FetchOneTask(req, res) {
  try {
    const tasksdata = await prisma.tasks.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      },
    });

    return res.status(201).json(tasksdata);
  } catch (error) {
    return res.status(400).json({ msg: "Error Fetching Task" });
  }
}

async function UpdateOneTask(req, res) {
  try {
    await prisma.tasks.update({
      where: {
        id: req.params.id,
      },
      data: {
        title: req.body.title,
        description: req.body.description,
      },
    });

    return res.status(201).json({ msg: "Task successfully updated!!" });
  } catch (error) {
    return res.status(400).json({ error, msg: "Error updating task" });
  }
}

async function DeleteOneTask(req, res) {
  try {
    await prisma.tasks.delete({
      where: {
        id: req.params.id,
      },
    });

    return res.status(201).json({ msg: "Task successfully deleted!!" });
  } catch (error) {
    return res.status(400).json({ error, msg: "Error deleting task" });
  }
}

module.exports = {
  AddTask,
  FetchAllTasks,
  FetchOneTask,
  UpdateOneTask,
  DeleteOneTask,
};
