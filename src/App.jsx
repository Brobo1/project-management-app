import {Sidebar}             from "./components/Sidebar.jsx";
import {useEffect, useState} from "react";
import {NoProject}           from "./components/NoProject.jsx";
import {AddProject}            from "./components/AddProject.jsx";
import {ProjectDisplaySidebar} from "./components/ProjectDisplaySidebar.jsx";

const PROJECTS = [
  {
	id:      1,
	title:   "project1",
	desc:    "this is project1",
	dueDate: Date.now(),
  },
  {
	id:      2,
	title:   "project2",
	desc:    "this is project2",
	dueDate: Date.now(),
  },
  {
	id:      3,
	title:   "project3",
	desc:    "this is project3",
	dueDate: Date.now(),
  },
]

function App() {
  const [projects, setProjects] = useState([]);
  const [showAddComponent, setShowAddComponent] = useState(false)
  
  
  useEffect(() => {
	const storedProjects = JSON.parse(localStorage.getItem('projects'));
	if (storedProjects) {
	  setProjects(storedProjects);
	}
  }, []);
  
  function handleAdd() {
	setShowAddComponent(() => true);
	console.log(cond);
  }
  
  function handleClose() {
	setShowAddComponent(() => false)
  }
  
  const cond = (showAddComponent && projects.length > 0);
  
  return (
	<>
	  <div
		className={"flex-row " +
				   "flex "}
	  >
		<Sidebar title={"ayayao"} projects={projects} onClick={handleAdd}/>
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
		  {!cond ?
		   <NoProject onClick={() => console.log("clicked")}/> :
		   <AddProject onSave={setProjects} projects={projects} onClose={handleClose}/>
		  }
		</div>
	  </div>
	</>
  );
}

export default App;
