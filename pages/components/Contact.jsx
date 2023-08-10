import React from 'react'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
  return (
    <div className="py-32 bg-[#dee6e9]" id="Contacto">
      <div className="flex justify-center animate-bounce">
        <MdEmail size="7em" />
      </div>
      <div className="flex flex-col justify-center my-5">
        <div className="text-2xl lg:text-4xl 2xl:text-6xl text-center my-5 font-wde font-bold">
          Estemos en contacto!
        </div>
        <div className="text-lg lg:text-xl 2xl:text-2xl text-center my-5 font-wde">
          Si estás interesado en hablar conmigo por un proyecto o algo similar
          escríbeme!
        </div>
        <div className="text-lg lg:text-xl 2xl:text-2xl text-center my-5 font-wde">
          Nota:El envío de mails está en proceso, mientras tanto contáctate
          conmigo por Linkedin :)
        </div>
      </div>
      <div className="flex justify-center cursor-pointer">
        <div className="transition duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white border-4 w-[50%] md:w-[40%] lg:w-[30%] 2xl:w-[20%] text-center border-black">
          <a href="https://www.linkedin.com/in/ivo-maydana-fs/" target="_blank">
            <span className="text-3xl font-2ond animate-pulse">
              Enviar un mensaje
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
