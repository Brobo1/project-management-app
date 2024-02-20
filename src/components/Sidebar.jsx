import {Button}                from "./Button.jsx";
import {ProjectDisplaySidebar} from "./ProjectDisplaySidebar.jsx";

export function Sidebar({title, projects, onClick}) {

  
  return (
	<aside
	  className={
		"bg-stone-950	 " +
		"w-80 " +
		"min-h-screen " +
		"mt-8 " +
		"rounded-tr-3xl " +
		"p-8 "
	  }
	>
	  <p
		className={
		  "text-stone-100 " +
		  "text-center " +
		  "text-4xl " +
		  "font-semibold "}
	  >
		Your projects
	  </p>
	  <Button onClick={onClick}>
		+ Add Project
	  </Button>
	  <ul>
		{projects.map((value) => (
		  <ProjectDisplaySidebar key={value.id} text={value.title} />
		))}
	  </ul>
	</aside>
  )
}