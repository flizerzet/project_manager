const Wrapper = (props) => {
  return (
    <div  className="wrapper p-16 fixed w-3/4 left-[25%] overflow-y-auto h-screen">
      {props.children}
    </div>
  )
};

export default Wrapper;