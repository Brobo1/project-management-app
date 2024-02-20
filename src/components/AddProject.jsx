import {Input}  from "./Input.jsx";
import {Button} from "./Button.jsx";
import {useRef} from "react";

export function AddProject({onSave, projects, onClose, ...props}) {
  const title = useRef(null);
  const desc  = useRef(null);
  const date  = useRef(null);
  
  function handleSave() {
	const projectLocal = [...projects, {id: projects.length + 1, title: title.current.value, desc: desc.current.value, date: date.current.value}];
	onSave(projectLocal);
	localStorage.setItem('projects', JSON.stringify(projectLocal));
	console.log(projects);
  }
  
  return (
	<>
	  <div className={"flex justify-end gap-4"}>
		<Button className={"text-4xl"} onClick={onClose}>Cancel</Button>
		<Button onClick={handleSave}>Save</Button>
	  </div>
	  <Input ref={title} label={"Title"} type={"text"}/>
	  <Input ref={desc} label={"Description"} type={"textarea"}/>
	  <Input ref={date} label={"Due Date"} type={"date"}/>
	</>
  )
}