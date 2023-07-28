import React from 'react'
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='py-16 bg-[#dee6e9]' id='Contacto'>
        <div className='flex justify-center'>
            <MdEmail size="7em"/>
        </div>
        <div className='flex flex-col justify-center my-5'>
            <div className='text-center my-5 font-2ond'>
                Estemos en contacto!
            </div>
            <div className='text-center my-5 font-2ond'>
                Si estás interesado en hablar conmigo por un proyecto o algo similar escríbeme!
            </div>
        </div>
        <div className='flex justify-center cursor-pointer'>
            <div className='transition hover:bg-blue-600 hover:border-blue-600 hover:text-white border-4 w-[50%] text-center border-black'>
                <span className='text-3xl font-wde'>
                    Enviar un mensaje
                </span>
            </div>
        </div>
    </div>
  )
}

export default Contact