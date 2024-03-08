const createError = require('http-errors')
const TaskGroup = require('../models/task-group.models');

module.exports.list = (req, res, next) => {

  // const name = req.query && req.query.name ? req.query.name : "" ;
  // const criteria = name ? { name: new RegExp(name, 'i') } : {};

  const { name } = req.query
  const criteria = {} 
  if(name) criteria.name = name

  TaskGroup.find( criteria )
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
      const group = await TaskGroup.findOne({ _id: req.params.id }) /* VERSION WITH ASYNC */
        if(!group){
          next(createError(404, "Taskgroup not found"));
        } else {
          await TaskGroup.deleteOne({ _id: req.params.id })
          res.status(204).send()
        }
    } catch (error){
        next(error)
    }

  // TaskGroup.findOne({ _id: req.params.id }) =>  VERSION WITH .findOne
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


  // TaskGroup.findByIdAndDelete(req.params.id) => VERSION WITH .findByIdAndDelete
  //   .then((group) => {
  //     if(!group){
  //       next(createError(404, 'TaskGroup not found'))
  //     } else {
  //       res.status(204).send() 
  //     }
      
  //   })
  //   .catch(error => next(error))

}

module.exports.detail = (req, res, next) => {

  TaskGroup.findById(req.params.id)
    .then(group => {
      if(!group) next(createError(404, "TaskGroup not found"))
      else res.status(200).json(group)
    })
    .catch(error => next(error))

}