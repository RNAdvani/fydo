import React from 'react'
import thanks from "./components/thanks.png"

function Thanks() {
  return (
    <div className='lg:w-[50vw] w-full '>
        <h1 className='text-xl p-2'>List Your Event</h1>
        <div className='w-full flex flex-col justify-center items-center gap-2 '>
            <img src={thanks} alt="" srcset="" />
            <h2 className='font-bold text-xl'>Event Created Successfully</h2>
            <p className='text-gray-400 text-center'>Sit back and relax now. Someone from Greet will call you in a moment.</p>
        </div>
    </div>
  )
}

export default Thanks