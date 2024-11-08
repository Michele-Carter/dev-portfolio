import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
      <footer className='w-full pb-10 mb-[80px] md:mb-5' id="contact">
          <div className='flex flex-col items-center'>
              <h1 className='heading lg:max-w-[45vw]'>Ready to take your <span className='text-purple'>your</span> digital prescence to the next level?
              </h1>
              <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you to achieve your goals</p>
              <a href='mailto:michele.carternz@gmail.com'>
                  <MagicButton
                      title="Let's get in touch"
                      icon={<FaLocationArrow />}
                      position='right'
                  />
              </a>
          </div>

          <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
              <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Michele Carter.  All rights reserved.</p>
          </div>
      
    </footer>
  )
}

export default Footer
