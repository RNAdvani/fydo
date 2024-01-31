import React from 'react'
import './modal.css'

function Modal({children,onClose}) {
  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-header' >
                <p className='close absolute mt-[-1rem]' onClick={()=>onClose()}>&times;</p>
            </div>
            <div className='modal-content flex flex-col' >
                {
                    children
                }
            </div>
        </div>
    </div>
  )
}

export default Modal