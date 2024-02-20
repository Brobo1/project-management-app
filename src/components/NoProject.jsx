import image    from '../assets/no-projects.png';
import {Button} from "./Button.jsx";

export function NoProject({...props}) {
  return (
	<>
	  <div className={"text-stone-700 text-center" }>
		<img
		  src={image}
		  alt={"picture of a noteblock"}
		  className={"w-40 " +
					 "mx-auto "}
		/>
		<h1 className={"text-4xl my-2"}>
		  You have no projects
		</h1>
		<p>Select a project or get started with a new one</p>
		<Button {...props}>Create new Project</Button>
	  </div>
	</>
  )
}