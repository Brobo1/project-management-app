import {Sidebar}             from "./components/Sidebar.jsx";
import {useEffect, useState} from "react";
import {NoProject}           from "./components/NoProject.jsx";
import {AddProject}          from "./components/AddProject.jsx";
import ProjectDisplay        from "./components/ProjectDisplay.jsx";

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
  const [projects, setProjects]                 = useState([]);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [selectProject, setSelectProject]       = useState();
  
  useEffect(() => {
	const storedProjects = JSON.parse(localStorage.getItem('projects'));
	if (storedProjects) {
	  setProjects(storedProjects);
	}
  }, []);
  
  function handleAdd() {
	setShowAddComponent(() => true);
  }
  
  function handleClose() {
	setShowAddComponent(() => false)
  }
  
  function handleProject(project) {
	setSelectProject(project);
  }
  
  return (
	<>
	  <div
		className={"flex-row " +
				   "flex " }
	  >
		<Sidebar title={"ayayao"} projects={projects} onClick={handleAdd} onProject={handleProject}/>
		<div
		  id={"mainContent"}
		  className={
					 "mx-8 " +
					 "h-screen " +
					 "w-1/2 " +
					 "min-w-1/2 " +
					 "flex " +
					 "flex-col " +
					 "justify-center " }
		>
		  {showAddComponent ? (
			<AddProject onSave={setProjects} projects={projects} onClose={handleClose}/>
		  ) : selectProject ? (
			<ProjectDisplay project={selectProject}/>
		  ) : (
				<NoProject onClick={() => console.log("clicked")}/>
			  )}
		
		</div>
	  </div>
	</>
  );
}

export default App;
