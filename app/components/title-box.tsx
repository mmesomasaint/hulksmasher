type TitleBoxType = {
  intro: string
  main: string
  pos: 'LEFT' | 'RIGHT' | 'CENTER'
  children: React.ReactNode
}

function TitleBox({ intro, main, pos, children }: TitleBoxType) {
  return (
    <div
      className={`flex flex-col justify-start ${
        pos === 'LEFT' && 'items-start'
      } ${pos === 'RIGHT' && 'items-end'} ${
        pos === 'CENTER' && 'items-center w-full md:w-[70%] lg:w-[50%] mx-auto text-center'
      } gap-5 px-[2%] lg:px-0`}
    >
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

export default TitleBox
