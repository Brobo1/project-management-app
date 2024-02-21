import {Task} from "./Task.jsx";

export default function ProjectDisplay({project, onTaskAdd}) {
  return (
	<>
	  <div className={"flex flex-col gap-4 text-start"}>
	  <h1 className={"text-5xl font-semibold"}>
		{project.title}
	  </h1>
	  <p className={"text-stone-500"}>
		{project.date}
	  </p>
	  <p>
		{project.desc}
	  </p>
	  <Task project={project} onTaskAdd={onTaskAdd}/>
	  </div>
	</>
  )
}