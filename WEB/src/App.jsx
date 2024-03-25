import { useState } from 'react'

import TaskList from './components/tasks/task-list/TaskList'
import TaskFinder from './components/tasks/task-finder/TaskFinder'
import GroupList from './components/groups/group-list/GroupList'



function App() {
  // const [count, setCount] = useState(0) => previous class showing how to do counter dinamically 

  return (
    <div className='container py-5'>
      <GroupList />
      <TaskList />
    </div>
  )
}

export default App

