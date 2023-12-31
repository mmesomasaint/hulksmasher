'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdKeyboardArrowDown,
} from 'react-icons/md'
import { BsCheckLg, BsTelephone, BsArrowRight } from 'react-icons/bs'
import Button from './button'

type ServiceType = {
  id: number
  name: string
}

const services: ServiceType[] = [
  { id: 1, name: 'Build Shoe' },
  { id: 2, name: 'Build Cloth' },
  { id: 3, name: 'Dress Me Up' },
  { id: 4, name: 'Opinion/Advice' },
]

function Contact() {
  const [selectedService, setSelectedService] = useState<ServiceType>(
    services[0]
  )

  return (
    <div className='relative px-5 xs:px-16 md:px-20 xl:px-40 pt-[35rem] xs:pt-[30rem] md:pt-96 py-10 bg-zinc-100 w-full'>
      <div className='absolute w-fit inset-x-0 mx-auto z-10 top-5 md:top-20 p-5 xs:p-10 rounded-md bg-amber-500/10 shadow-[0_0_20px_-6px_rgb(239_68_68_/_0.55)]'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5 xs:gap-10'>
          <div className='w-full md:w-fit flex flex-col xs:flex-row md:flex-col items-center justify-start gap-3'>
            <div className='w-16 h-16 flex flex-shrink-0 justify-center items-center bg-amber-500 rounded-full'>
              <MdOutlineLocationOn className='text-white dark:text-text-pink text-4xl' />
            </div>
            <div className='flex flex-col items-center xs:items-start md:items-center justify-start gap-3'>
              <h4 className='text-black text-sm sm:text-base font-semibold leading-tight'>
                ADDRESS
              </h4>
              <div className=''>
                <p className='text-black text-sm sm:text-base font-medium  leading-tight text-center xs:text-left md:text-center'>
                  Dept of Computer Sci, UNN
                </p>
                <p className='text-black text-sm sm:text-base font-medium  leading-tight text-center xs:text-left md:text-center'>
                  Nsk, Enugu
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-fit flex flex-col xs:flex-row md:flex-col items-center justify-start gap-3'>
            <div className='w-16 h-16 flex flex-shrink-0 justify-center items-center bg-amber-500 rounded-full'>
              <MdOutlineEmail className='text-white dark:text-text-pink text-4xl' />
            </div>
            <div className='flex flex-col items-center xs:items-start md:items-center justify-start gap-3'>
              <h4 className='text-black text-sm sm:text-base font-semibold leading-tight'>
                EMAIL
              </h4>
              <div className=''>
                <p className='text-black text-sm sm:text-base font-medium  leading-tight text-center xs:text-left md:text-center'>
                  mmesomasaint@gmail.com
                </p>
                <p className='text-black text-sm sm:text-base font-medium  leading-tight text-center xs:text-left md:text-center'>
                  www.github.com/mmesomasaint
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-fit flex flex-col xs:flex-row md:flex-col items-center justify-start gap-3'>
            <div className='w-16 h-16 flex flex-shrink-0 justify-center items-center bg-amber-500 rounded-full'>
              <BsTelephone className='text-white dark:text-text-pink text-4xl' />
            </div>
            <div className='flex flex-col items-center xs:items-start md:items-center justify-start gap-3'>
              <h4 className='text-black text-sm sm:text-base font-semibold leading-tight'>
                PHONE
              </h4>
              <div className=''>
                <p className='text-black text-sm sm:text-base font-medium  leading-tight text-center xs:text-left md:text-center'>
                  +(234)8157-832-809
                </p>
                <p className='text-black text-sm sm:text-base font-medium  leading-tight text-center xs:text-left md:text-center'>
                  08157832809
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <h2 className='text-3xl sm:text-4xl font-bold text-red-500 leading-tight text-center mb-10'>
          Any Service You Need
        </h2>
        <div className='flex flex-col items-start justify-start gap-10'>
          <Listbox value={selectedService} onChange={setSelectedService}>
            <div className='relative w-full sm:w-72'>
              <Listbox.Button className='flex justify-between items-center w-full gap-4 p-3 bg-white rounded-md'>
                <p className='text-black text-sm sm:text-base font-semibold  leading-tight text-center'>
                  {selectedService.name}
                </p>
                <MdKeyboardArrowDown className='text-amber-500 text-xl sm:text-3xl' />
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute w-full z-20 mt-1 bg-white rounded-md'>
                  {services.map((service) => (
                    <Listbox.Option
                      key={service.id}
                      value={service}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <li
                          className={`${
                            active
                              ? 'bg-amber-500 text-white'
                              : 'bg-white text-black'
                          } ${
                            selected ? 'font-medium' : 'font-light'
                          } flex justify-start items-center gap-2 p-3 rounded-md text-sm sm:text-base`}
                        >
                          {selected && (
                            <BsCheckLg className='text-amber-500 text-xl sm:text-3xl' />
                          )}
                          {service.name}
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <div className='grid grid-cols-1 sm:grid-cols-3 place-items-stretch gap-10 w-full'>
            <input
              type='text'
              placeholder='First Name'
              className='placeholder:text-black placeholder:opacity-70 text-black text-sm sm:text-base font-normal leading-none p-3 rounded-md shadow-md bg-white focus:outline-none border border-transparent focus:border-amber-500'
            />
            <input
              type='number'
              placeholder='Mobile Number'
              className='placeholder:text-black placeholder:opacity-70 text-black text-sm sm:text-base font-normal leading-none p-3 rounded-md shadow-md bg-white focus:outline-none border border-transparent focus:border-amber-500'
            />
            <input
              type='email'
              placeholder='Email Address'
              className='placeholder:text-black placeholder:opacity-70 text-black text-sm sm:text-base font-normal leading-none p-3 rounded-md shadow-md bg-white focus:outline-none border border-transparent focus:border-amber-500'
            />
          </div>
          <input
            type='text'
            placeholder='Subject'
            className='w-full placeholder:text-black placeholder:opacity-70 text-sm sm:text-base font-normal leading-none p-3 rounded-md shadow-md bg-white focus:outline-none border border-transparent focus:border-amber-500'
          />
          <textarea
            rows={7}
            placeholder='Message'
            className='w-full placeholder:text-black placeholder:opacity-70 text-sm sm:text-base font-normal leading-none p-3 rounded-md shadow-md bg-white focus:outline-none border border-transparent focus:border-amber-500'
          />
          <div className='flex justify-center items-center w-full'>
            <Button>
              <span className='flex justify-center items-center gap-2'>
                <p>SEND MESSAGE</p>
                <BsArrowRight className='text-white text-xl' />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
