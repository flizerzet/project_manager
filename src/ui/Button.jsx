const Button = ({text, additionalClasses, type, onClick}) => {
  return (
    <button onClick={onClick} type={type ?? 'button'} className={`py-4 px-5 text-white rounded-lg w-6/12 mx-auto mt-4 transition ${additionalClasses}`}>
      {text}
    </button>
  )
};

export default Button;