import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function TaskForm({onCreate}) {

  const {register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      completed: false
    }
  })

  const onSubmit = (task) => {
    
      console.log(task)
      console.log(errors)
      onCreate(task)
      reset();

    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* TITLE */}
      <div className="input-group mb-3">
        <span className="input-group-text"><i className="fa fa-tag"></i></span>
        <input type="text" 
          className={`form-control ${ errors.title ? 'is-invalid' : ""}`}
          placeholder="Task name"
          {...register("title", {
            required: "Title is required", 
            minLength: {
              value: 3, 
              message: "Title needs at least 3 characters"
            }
          })}
        />
        <button className="btn btn-outline-secondary" type="submit" disabled={!isValid}><i className="fa fa-plus"></i></button>
        { errors.title && (<div className='invalid-feedback'>{errors.title.message}</div>)}
      </div>
    </form>
  )
}

TaskForm.defaultProps = {
  onCreate : () => {}
}

export default TaskForm