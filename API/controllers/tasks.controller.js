const createError = require("http-errors")
const TaskGroup = require("../models/task-group.models")
const Task = require("../models/task.model");

module.exports.create = (req, res, next) => {

 // /task-groups/:groupId/tasks

  TaskGroup.findById(req.params.groupId)
    .then((group) => {
      if(!group) {
        next(createError(404, "Task group not found"))
      } else {
        // task = {... req.body, group: group.id} => option 2
        req.body.group = group.id
        return Task.create(req.body)
          .then((task) => res.status(201).json(task)) //always return the task created for inmediate further moves
      }
    })
    .catch(error => next(error))

}

module.exports.delete = (req, res, next) => {

  Task.findByIdAndDelete(req.params.id)
    .then((task) => {
      if(!task) next(createError(404, "Task not found"))
      res.status(204).send();
    })
    .catch(error => next(error))

}