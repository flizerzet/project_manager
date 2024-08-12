import Button from "../ui/Button.jsx";

const Sidebar = (props) => {
  const handleBtnClick = () => {
    props.onSelect('create')
  }

  const handleProjectCLick = (e) => {
    const id = e.target.closest('li').getAttribute('id');
    props.onSelect(id);
  }

  return (
    <aside className="flex flex-col pt-8 p-4 bg-gray-800 h-screen">
      <h2 className="text-2xl uppercase text-white text-center">Your projects</h2>
      <Button onClick={handleBtnClick} text="Add new project" additionalClasses={'bg-gray-950 hover:bg-gray-700 mt-4'}/>
      <ul className="flex flex-col gap-3 mt-4">
        {props.projectLists.map((project) => (
            <li onClick={handleProjectCLick} key={project.id} id={project.id} className={`p-4 hover:bg-gray-700 cursor-pointer transition rounded-md hover:text-white text-gray-400 ${props.visibleTask === project.id && 'bg-gray-600 text-white'}`}>
              <h2>{project.name}</h2>
            </li>
          )
        )}
      </ul>
    </aside>
  )
};

export default Sidebar;