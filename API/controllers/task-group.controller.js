const TaskGroup = require('../models/task-group.models');

module.exports.list = (req, res, next) => {

  TaskGroup.find()
    .then(group => res.json(group))
    .catch(error => next(error))

}

module.exports.create = (req, res, next) => {

  console.log("This is the request body:", req.body);

  TaskGroup.create(req.body)
    
    .then((group) => {
      res.status(201).json(group)
    })
    .catch(error => next(error))
    

}