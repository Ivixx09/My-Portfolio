import React from 'react'
<<<<<<< HEAD
import  MdEmail  from 'react-icons/md'
=======
import { MdEmail } from 'react-icons/md'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
>>>>>>> 3a27e591c8ecfc7e45590b19d8495353ae728677
const Contact = () => {
  return (
    <section className="py-32 bg-[#dee6e9]" id="Contacto">
      <div className="flex justify-center animate-bounce">
        <MdEmail size="7em" />
      </div>
      <div className="flex flex-col justify-center my-5">
        <span className="text-2xl lg:text-4xl 2xl:text-6xl text-center my-5 font-wde font-bold">
          Estemos en contacto!
        </span>
        <span className="text-lg lg:text-xl 2xl:text-2xl text-center my-5 font-wde">
          Si estás interesado en hablar conmigo por un proyecto o algo similar
          escríbeme!
        </span>
      </div>
      <div className="flex flex-col justify-center my-5">
        <span className="text-lg lg:text-xl 2xl:text-2xl text-center my-5 font-wde">
          Puedes enviar un mail a ivo09maydana@gmail.com
        </span>
        <br />
        <span className="text-lg lg:text-xl 2xl:text-2xl text-center my-5 font-wde">
          O contactarte a mi número de teléfono +54 370 4013565
        </span>
        <p className="text-lg lg:text-xl 2xl:text-2xl text-center my-5 font-wde">
          Aunque si lo prefieres también tienes mis redes profesionales para que
          podamos chatear ;)
        </p>
      </div>
      <div className="flex justify-center space-x-8">
        <div>
          <a
            href="https://github.com/Ivixx09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub size="7em" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/ivo-maydana-fs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin size="7em" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
