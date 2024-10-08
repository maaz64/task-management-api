const db = require('../models');

exports.createTask = async (req, res) => {
  try {
    const task = await db.Task.create({ ...req.body, userId: req.user.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const { status, priority, due_date, page = 1, limit = 10 } = req.query;
  const filter = { userId: req.user.id };
  const offset = (page - 1) * limit;

  if (status) filter.status = status;
  if (priority) filter.priority = priority;
  if (due_date) filter.due_date = due_date;

  try {
    const tasks = await db.Task.findAndCountAll({ where: filter, limit, offset });
    res.status(200).json({ tasks: tasks.rows, total: tasks.count, page: parseInt(page), pages: Math.ceil(tasks.count / limit) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await db.Task.findOne({ where: { id: req.params.taskId, userId: req.user.id } });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.update(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await db.Task.findOne({ where: { id: req.params.taskId, userId: req.user.id } });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
