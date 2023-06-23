type TitleBoxType = {
  intro: string
  main: string
  children: React.ReactNode
}

function TitleBox({ intro, main, children }: TitleBoxType) {
  return (
    <div className='flex order-first md:order-none flex-col justify-start items-start gap-5 px-[2%] md:px-10'>
      <h3 className='text-sm sm:text-base font-medium text-black leading-none'>
        {intro}
      </h3>
      <h2 className='text-3xl sm:text-4xl font-bold text-red-500 leading-tight'>
        {main}
      </h2>
      <p className='text-black text-sm sm:text-base font-medium leading-tight'>
        {children}
      </p>
    </div>
  )
}
