const Wrapper = (props) => {
  return (
    <div  className="wrapper p-16">
      {props.children}
    </div>
  )
};

export default Wrapper;