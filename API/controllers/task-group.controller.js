const TaskGroup = require('../models/task-group.models');

module.exports.list = (req, res, next) => {

  TaskGroup.find()
    .then(group => res.json(group))
    .catch(error => next(error))

}