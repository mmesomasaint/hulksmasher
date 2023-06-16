type ButtonType = {
  children: React.ReactNode
  secondary?: boolean
}

function Button({children, secondary}: ButtonType) {
  return (
    <button className={`${secondary ? 'bg-amber-500' : 'bg-red-500'} px-6 py-3 rounded-md text-base font-medium text-white`}>
      {children}
    </button>
  )
}

export default Button