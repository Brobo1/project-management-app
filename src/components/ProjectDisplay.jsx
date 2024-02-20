import {Task} from "./Task.jsx";

export default function ProjectDisplay({project}) {
  return (
	<>
	  <div className={"text-start h-3/4 "}>
	  <h1 className={"text-5xl font-semibold"}>
		{project.title}
	  </h1>
	  <p className={"text-stone-500"}>
		{project.date}
	  </p>
	  <p>
		{project.desc}
	  </p>
	  <Task/>
	  </div>
	</>
  )
}