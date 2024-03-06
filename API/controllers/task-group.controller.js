const createError = require('http-errors')
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

module.exports.delete = async (req, res, next) => {

    try{
      const group = await TaskGroup.findOne({ _id: req.params.id })
        if(!group){
          next(createError(404, "Taskgroup not found"));
        } else {
          await TaskGroup.deleteOne({ _id: req.params.id })
          res.status(204).send()
        }
    } catch (error){
        next(error)
    }

  // TaskGroup.findOne({ _id: req.params.id })
  //   .then((group) => {
  //     // console.log(group)
  //     if(!group){
  //       next(createError(404, "TaskGroup not found"))
  //     } else {
  //       return TaskGroup.deleteOne({ _id: req.params.id })
  //         .then(() => res.status(204).send())
  //     }
  //   })
  //   .catch(error => next(error))


  // TaskGroup.findByIdAndDelete(req.params.id)
  //   .then((group) => {
  //     if(!group){
  //       next(createError(404, 'TaskGroup not found'))
  //     } else {
  //       res.status(204).send() 
  //     }
      
  //   })
  //   .catch(error => next(error))

}