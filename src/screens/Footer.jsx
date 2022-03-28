import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 flex items-center justify-between md:p-5'>
      <img className='w-32 md:w-auto' src="/assets/images/propino-sarı-logo.png" alt="" />  
      <a
          target="_blank"
          href="https://nerasocial.com/"
        >  
      <img className='w-32 md:w-auto mt-4' src="/assets/images/made-by-nera.png" alt="" />    
      </a>
    </div>
  )
}

export default Footer