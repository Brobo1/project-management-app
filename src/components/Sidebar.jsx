import {Button}         from "./Button.jsx";
import {ProjectDisplay} from "./ProjectDisplay.jsx";

export function Sidebar({title, projects}) {
  function handleClick() {
	console.log("ayooyo");
  }
  
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
	  <Button onClick={handleClick}>
		+ Add Project
	  </Button>
	  <ul>
		{projects.map((value) => (
		  <ProjectDisplay key={value.title} text={value.title} />
			
		))}
	  </ul>
	</aside>
  )
}