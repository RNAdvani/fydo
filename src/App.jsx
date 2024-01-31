import React, { useState } from 'react'
import Modal from './components/Modal'
import './App.css'
import Form from './Form';
import iphone from './components/iphonefydo.png'

function App() {

  const [modalOpen,setOpenModal] = useState(false);
  const handleButtonClick =()=>{
    setOpenModal(false)
  }

  document.body.style.overflow = modalOpen? "hidden" :"auto" 

  return (
    <div className='App'>

      <div className="landing flex flex-col lg:flex-row  text-white ">
            <div className="landing-info max-lg:items-center lg:w-[50%] h-full flex gap-4 flex-col  justify-center p-10">
                <h1 className='text-[3rem] font-bold'>Effortlessly go live with your event in a go!</h1>
                <p className='text-sm'>Empower your events, whether on-ground or digital, with our user-friendly platform loved by millions, making event creation and hosting a breeze</p>
                <button className='btn  btn-open shadow-none bg-[#FE3838]' onClick={()=>setOpenModal(true)}>List Your Event</button>
            </div>
            <div className="flex items-end justify-center lg:w-[50%]">
              <img src={iphone} className='w-[50%]' alt="" srcset="" />
            </div>
        <div>

        </div>
      </div>
      
      {
        modalOpen && (
            <Modal  onClose={handleButtonClick} >
              <Form onFormSubmit={handleButtonClick} onCancel={handleButtonClick} />
           </Modal>
        )
      }
    </div>
  )
}

export default App


