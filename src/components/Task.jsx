import {Input}            from "./Input.jsx";
import {useRef, useState} from "react";
import {Button}           from "./Button.jsx";

export function Task() {
  const [tasks, setTasks] = useState([]);
  
  const task = useRef();
  
  function handleTask() {
	setTasks(prevState => [...prevState, task.current.value])
	
	console.log(tasks)
  }
  
  function handleDelete(selectedTask) {
	const deleteTask = tasks.filter((task) => task !== selectedTask)
	
	setTasks(() => deleteTask);
  }
  
  return (
	<>
	  <div className={"flex w-full justify-between gap-4 h-20"}>
		<Input ref={task} type={"text"} label={"Tasks"}/>
		<Button onClick={handleTask}> Add Task </Button>
	  </div>
	  <div>
		{tasks.map((task, index) =>
					 <p key={index} onClick={() => handleDelete(task)}>{task}</p>
		)}
	  </div>
	</>
  )
}