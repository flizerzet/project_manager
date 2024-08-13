import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import CreateForm from "./components/CreateForm.jsx";
import ProjectPage from "./components/ProjectPage.jsx";

import {useEffect, useState} from "react";
import Wrapper from "./ui/Wrapper.jsx";

function App() {
  const [visibleContent, setVisibleContent] = useState('');
  const [projectsList, setProjectsList] = useState(JSON.parse(window.localStorage.getItem("projects")) ?? [])

  useEffect(() => {
    window.localStorage.setItem("projects", JSON.stringify(projectsList));
  }, [projectsList]);

  const addNewProject = (project) => {
    setProjectsList(PL => ([
        ...PL,
        project
      ]
    ))

  }

  const removeProject = (id) => {
    setProjectsList(projectsList.filter(project => project.id !== id));
  }

  const addNewTask = (projectId, task) => {
    const currentTask = projectsList.find((project) => project.id === projectId);
    currentTask.tasks.push(task);
    setProjectsList(list => (
      [...list]
    ));
  }

  const removeTask = (projectId, taskId) => {
    const currentTask = projectsList.find((project) => project.id === projectId);
    currentTask.tasks = currentTask.tasks.filter((projectTask) => projectTask.id !== taskId);
    setProjectsList(list => (
      [...list]
    ));
  }

  const setContentToShow = (value) => {
    setVisibleContent(value);
  }

  return (<div className="grid grid-cols-main">
    <Sidebar onSelect={setContentToShow} visibleTask={visibleContent.slice(0, 2) === 'id' ? visibleContent : null}
             projectLists={projectsList}></Sidebar>
    <Wrapper>
      {visibleContent === '' ?
        <Main onClickBtn={setContentToShow}/> :
        (visibleContent === 'create' ?
            <CreateForm onFormSubmit={addNewProject} onFormCancel={setContentToShow}/> :
            <ProjectPage onRemoveProject={{removeProject, setContentToShow}} onRemoveTask={removeTask} onAddTask={addNewTask} project={projectsList.find(elem => elem.id === visibleContent)}/>
        )
      }
    </Wrapper>
  </div>);
}

export default App;
