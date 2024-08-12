import {getMonth} from "../utilities/functions.js";

const ProjectPage = ({project}) => {
  project = project[0];
  const Month = getMonth(project.dueDate);
  return (
    <div className="project-page">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-700 text-4xl font-bold">{project.name}</h2>
        <button className='text-gray-600 hover:text-gray-950'>Delete</button>
      </div>
      <div className="due-date text-2xl text-gray-400 font-semibold mt-2">Deadline: {Month} {project.dueDate.getDate()}, {project.dueDate.getFullYear()}</div>
      <div className="description mt-8 text-xl text-gray-600 border-b-4 border-b-gray-300 pb-8">{project.description}</div>
      <div className="tasks mt-8">
        <h3 className="text-gray-700 text-4xl font-bold">Tasks</h3>
      </div>
    </div>
  )
};

export default ProjectPage;