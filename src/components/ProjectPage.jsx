import {getMonth, getRandom} from "../utilities/functions.js";
import {useRef} from "react";

const ProjectPage = ({project, onAddTask, onRemoveTask, onRemoveProject}) => {
  const date = new Date(project.dueDate);
  const Month = getMonth(date);

  const inputRef = useRef('');
  const formRef = useRef('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== '') {
      onAddTask(project.id, {id: `task-${getRandom()}`, title: inputRef.current.value});
      formRef.current.reset();
    }
  }

  const handleRemoveTask = (e) => {
    e.preventDefault();
    onRemoveTask(project.id, e.target.closest('li').id);
  }

  const handleRemoveProject = (e) => {
    e.preventDefault();
    onRemoveProject.setContentToShow('');
    onRemoveProject.removeProject(project.id);
  }

  return (
    <div className="project-page">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-700 text-4xl font-bold">{project.name}</h2>
        <button onClick={handleRemoveProject} className='text-gray-600 hover:text-gray-950'>Delete</button>
      </div>
      <div className="due-date text-2xl text-gray-400 font-semibold mt-2">Deadline: {Month} {date.getDate()}, {date.getFullYear()}</div>
      <div
        className="description mt-8 text-xl text-gray-600 border-b-4 border-b-gray-300 pb-8">{project.description}</div>
      <div className="tasks mt-8">
        <h3 className="text-gray-700 text-4xl font-bold">Tasks</h3>
        <form ref={formRef} onSubmit={handleAddTask} className="flex gap-8 items-center mt-8">
          <input ref={inputRef} type="text"
                 className="w-[250px] bg-gray-100 px-4 py-2 border-gray-300 border-2 rounded"/>
          <button type='submit' className='text-gray-600 hover:text-gray-950'>Add task</button>
        </form>
        {project.tasks.length > 0 && <div className='tasks p-8 bg-gray-300 w-3/4 mt-8 rounded-md'>
          <ul className='flex flex-col gap-4'>
            {project.tasks.map((task) => (<li key={task.id} id={task.id} className='flex gap-12 justify-between items-center'>
              {task.title}
              <button onClick={handleRemoveTask} className='text-gray-600 hover:text-gray-950'>Clear</button>
            </li>))}
          </ul>
        </div>}
      </div>
    </div>
  )
};

export default ProjectPage;