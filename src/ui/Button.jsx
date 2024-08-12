const Button = ({text, additionalClasses, type, onClick}) => {
  return (
    <button onClick={onClick} type={type ?? 'button'} className={`py-4 px-5 text-white rounded-lg transition ${additionalClasses}`}>
      {text}
    </button>
  )
};

export default Button;