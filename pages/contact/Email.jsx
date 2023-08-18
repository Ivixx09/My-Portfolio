import React from 'react'
import { Formik, Field } from 'formik'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

import mailSchema from '../../api/Validations/Validations.js'

export default function Page() {
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    subject: '',
    text: '',
  }

  const onSubmit = (values) => {
    console.log('values', values)
  }
  return (
    <section
      className="flex flex-col justify-center h-screen"
      style={{
        backgroundImage: "url('/images/FondoMail.jpg')",
      }}
    >
      <h1 className="font-wde text-cyan-50 text-center text-3xl">
        FORMULARIO DE CONTACTO
      </h1>
      <div className="md:grid grid-cols-2 lg:mx-48 xl:mx-[20%] 2xl:mx-[25%]  bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 mx-12 rounded-md space-y-2">
        <div className="grid grid-cols-1 gap-4 justify-items-center content-center text-white pt-7">
          <div className="flex space-x-3">
            <AiOutlineMail size="2em" />
            <p className="font-2ond">IVO09MAYDANA@GMAIL.COM</p>
          </div>
          <div className="flex space-x-3">
            <AiOutlinePhone size="2em" />
            <p className="font-2ond">+54 370 4013565</p>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="animate-bounce">
              <a
                href="https://github.com/Ivixx09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrGithub size="2em" />
              </a>
            </div>
            <div className="animate-bounce">
              <a
                href="https://www.linkedin.com/in/ivo-maydana-fs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedin size="2em" />
              </a>
            </div>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={mailSchema}
        >
          {({ errors, touched, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-14 justify-items-center content-center py-10"
            >
              <div>
                <div>
                  <div className="flex flex-col">
                    <Field
                      name="name"
                      id="name"
                      placeholder="Nombre"
                      className="border-gray-400 border-[2px] rounded-md h-9 w-52 md:w-80 "
                    />
                    <div className="text-white">
                      {errors.name && touched.name && errors.name}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <Field
                    name="lastName"
                    id="lastName"
                    placeholder="Apellido"
                    className="border-gray-400 border-[2px] rounded-md h-9 w-52 md:w-80"
                  />
                  <div className="text-white">
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="flex flex-col">
                  <Field
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="border-gray-400 border-[2px] rounded-md h-9 w-52 md:w-80"
                  />
                  <div className="text-white">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <Field
                    name="subject"
                    id="subject"
                    placeholder="Asunto"
                    className="border-gray-400 border-[2px] rounded-md h-9 w-52 md:w-80"
                  />
                  <div className="text-white">
                    {errors.subject && touched.subject && errors.subject}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <Field
                    name="text"
                    id="text"
                    placeholder="Texto"
                    className="border-gray-400 border-[2px] rounded-md h-36 w-80"
                  />
                  <div className="text-white">
                    {errors.text && touched.text && errors.text}
                  </div>
                </div>
              </div>
              <div className="text-white">
                <button
                  type="submit"
                  className={
                    errors.name ||
                    errors.email ||
                    errors.lastName ||
                    errors.subject ||
                    errors.text
                      ? 'border-2 w-32 bg-pink-800 border-indigo-500'
                      : 'border-2 w-32 bg-pink-800 border-indigo-500 animate-pulse'
                  }
                >
                  ENVIAR
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  )
}
