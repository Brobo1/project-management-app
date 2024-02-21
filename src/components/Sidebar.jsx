import {Button}                from "./Button.jsx";
import {ProjectDisplaySidebar} from "./ProjectDisplaySidebar.jsx";

export function Sidebar({title, projects, onClick, onProject}) {
  
  return (
	<aside
	  className={
		"bg-stone-950 " +
		"w-2/6 " +
		"min-w-fit " +
		"mt-8 " +
		"rounded-tr-3xl " +
		"pt-20 " +
		"px-10 "
	  }
	>
	  <p
		className={
		  "text-stone-100 " +
		  "text-4xl " +
		  "pb-8 " +
		  "font-semibold "
		}
	  >
		Your projects
	  </p>
	  <Button onClick={onClick}>
		+ Add Project
	  </Button>
	  <ul className={"flex flex-col gap-4 mt-8"}>
		{projects.map((project) => (
		  <ProjectDisplaySidebar
			key={`${project.id}-${project.index}`}
			text={project.title}
			onClick={() => onProject(project)}
		  />
		))}
	  </ul>
	</aside>
  )
}