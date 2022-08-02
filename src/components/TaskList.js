import React,{useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [lists, setLists] = useState(tasks);

  const deleteTask = (id) => {
    setLists(lists.filter(list => list.id !== id));
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {lists.map((list,index) => {

        return <Task key={index} id={index} deleteTask={deleteTask} />

      })}
    </div>
  );
}

export default TaskList;
