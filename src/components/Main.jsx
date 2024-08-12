import Button from "../ui/Button.jsx";

const Main = (props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold text-center">No project selected!<br/>Create a new one</h1>
      <Button onClick={() => props.onClickBtn('create')} text="Create project" additionalClasses={'bg-blue-700 hover:bg-blue-500 w-3/12 block mt-4'}/>
    </div>
  )
};

export default Main;