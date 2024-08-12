import nextId from 'react-id-generator';

import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import CreateForm from "./components/CreateForm.jsx";
import ProjectPage from "./components/ProjectPage.jsx";

import {useState} from "react";
import Wrapper from "./ui/Wrapper.jsx";

function App() {
  const [visibleContent, setVisibleContent] = useState('');

  const [projectsList, setPojectsList] = useState([{
    id: nextId(), name: 'Test', description: " look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and", dueDate: new Date(), tasks: ["Task 1", "Task 2", "Task 3", "Task 4"],
  }, {
    id: nextId(), name: 'Test2', description: "ou are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a ha", dueDate: new Date(), tasks: ["Task 1", "Task 2", "Task 3"],
  }]);

  const addNewProject = (project) => {
    setPojectsList(PL => ([
        ...PL,
        project
      ]
    ))
  }

  const addNewTask = (projectId) => {
    const currentTask = projectsList.find((project) => project.id === projectId);
  }

  const setContentToShow = (value) => {
    setVisibleContent(value);
  }

  return (<div className="grid grid-cols-main">
    <Sidebar onSelect={setContentToShow} visibleTask={visibleContent.slice(0, 2) === 'id' ? visibleContent : null} projectLists={projectsList}></Sidebar>
    <Wrapper>
      {visibleContent === '' ?
        <Main onClickBtn={setContentToShow} /> :
        (visibleContent === 'create' ?
          <CreateForm onFormSubmit={addNewProject} onFormCancel={setContentToShow}/> :
          <ProjectPage project={projectsList.filter(elem => elem.id === visibleContent)}/>
        )
      }
    </Wrapper>
  </div>);
}

export default App;
