const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskGroupSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Group name is required',
      minLength: [3, 'Group name needs at least 3 chars']
    }
  },
  {
    timestamps: true
  }
)

const TaskGroup = mongoose.model('TaskGroup', taskGroupSchema);

module.exports = TaskGroup;