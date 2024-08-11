import nextId from 'react-id-generator';

import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import CreateForm from "./components/CreateForm.jsx";

import {useState} from "react";


function App() {
  const [visibleContent, setVisibleContent] = useState('');
  const [showMain, setShowMain] = useState(true);

  const [projectsList, setPojectsList] = useState([{
    id: nextId(), name: 'Test', description: "Test", dueDate: new Date(),
  }, {
    id: nextId(), name: 'Test2', description: "Test2", dueDate: new Date(),
  }]);

  const addNewProject = (project) => {
    setPojectsList(PL => ([
        ...PL,
        project
      ]
    ))
  }

  const contentToShow = (value) => {
    setVisibleContent(value);
  }

  return (<div className="grid grid-cols-main">
    <Sidebar onSelect={contentToShow} projectLists={projectsList}></Sidebar>
    {visibleContent === '' ? <Main onClickBtn={contentToShow} /> : visibleContent === 'create' ? <CreateForm onFormSubmit={addNewProject} onFormCancel={contentToShow}/> : <ProjectPage />}
    {/*<CreateForm onFormSubmit={addNewProject}/>*/}
  </div>);
}

export default App;
