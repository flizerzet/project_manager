const Input = (props) => {
  return (
    <label className="flex flex-col gap-1 mb-4 ">
      <span className="uppercase text-gray-600 font-bold">{props.label}</span>
      {props.children}
    </label>
  )
};

export default Input;