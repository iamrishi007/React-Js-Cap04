
function TaskItem({ item, handleDelete, handleToggle }) {
     return (
          <div key={"key"}>
               <h3>{item.task}</h3>
               <button onClick={handleToggle}>{item.completed ? "Yes" : "No"}</button>
               <p>{item.taskAssignedTo}</p>
               <button onClick={handleDelete}>Delete</button>

          </div>
     );
}

export default TaskItem;
