import {Sidebar}  from "./components/Sidebar.jsx";
import {useState} from "react";
import {NoProject} from "./components/NoProject.jsx";
import {AddProject} from "./components/AddProject.jsx";

const PROJECTS = [
  {
	title:   "project1",
	desc:    "this is project1",
	dueDate: Date.now(),
  },
  {
	title:   "project2",
	desc:    "this is project2",
	dueDate: Date.now(),
  },
  {
	title:   "project3",
	desc:    "this is project3",
	dueDate: Date.now(),
  },
]

function App() {
  const [projects, setProjects] = useState(PROJECTS);
  
  return (
	<>
	  <div
		className={"flex-row " +
				   "flex "}
	  >
		<Sidebar title={"ayayao"} projects={projects}/>
		<div
		  id={"mainContent"}
		  className={"text-center " +
					 "mx-8 " +
					 "h-screen " +
					 "w-full " +
					 "flex " +
					 "flex-col " +
					 "justify-center " +
					 "items-center "}
		>
		  {!projects && <NoProject onClick={() => console.log("clicked")}/>}
		  {projects && <AddProject/>}
		</div>
	  </div>
	</>
  );
}

export default App;
