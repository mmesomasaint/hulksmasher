type ButtonType = {
  children: React.ReactNode
  secondary?: boolean
}

function Button({children, secondary}: ButtonType) {
  return (
    <button className={`${secondary ? 'bg-amber-500' : 'bg-red-500'} px-6 py-3 rounded-md text-sm sm:text-base font-medium text-white transform duration-100 active:scale-[1.10]`}>
      {children}
    </button>
  )
}

export default Button