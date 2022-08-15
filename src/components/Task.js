import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day} onClick={() => onDelete(task.id)}</p>
    </div>
  )
}
export default Task