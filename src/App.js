import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, 
     text: 'learn react',
     day: 'today',
     reminder: true
    }
 ])

const deleteTask = (id) => {
  console.log('delete', id)
}

  return (
    <div className="container">
       <Header title='Hello' />
       <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
  }

export default App;
