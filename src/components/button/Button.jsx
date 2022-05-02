const Button = ({ children, className, outlined }) => {
  let classNames =
    'bg-violet-800 border-2 border-violet-800 hover:bg-violet-900 hover:border-violet-900 text-white'
  if (outlined) {
    classNames =
      'bg-white border-2 border-violet-800 hover:border-violet-900 text-black dark:border-none'
  }

  return (
    <div style={{ display: 'inline-block' }} className={className}>
      <button className={`font-sans py-4 px-6 font-medium rounded-xl ${classNames}`}>
        {children}
      </button>
    </div>
  )
}

export default Button
