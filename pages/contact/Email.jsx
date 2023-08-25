import React, { useRef } from 'react'
import * as Yup from 'yup'
import { Formik, Field } from 'formik'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

export default function Page() {
  const form = useRef()

  const initialValues = {
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  }

  const mailSchema = Yup.object().shape({
    user_name: Yup.string().required('Por favor ingresa tu nombre'),
    user_email: Yup.string().email().required('Por favor ingresa tu mail'),
    subject: Yup.string().required('Requerido'),
    message: Yup.string().required('Requerido'),
  })

  const onSubmit = async (values, { resetForm }) => {
    alert(
      JSON.stringify(
        'Tu email fue enviado correctamente, gracias por contactarte :D',
      ),
    )
    await resetForm()
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
          validationSchema={mailSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleSubmit }) => (
            <form
              onSubmit={() =>
                setTimeout(() => {
                  document.getElementById('form').reset()
                }, 3000)
              }
              ref={form}
              className="grid grid-cols-1 gap-14 justify-items-center content-center py-10"
              id="form"
              action="https://getform.io/f/e723004a-9501-447c-ba73-b2c3e745830d"
              method="POST"
              encType="multipart/form-data"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div>
                  <div className="flex flex-col">
                    <Field
                      name="user_name"
                      id="user_name"
                      placeholder="Nombre"
                      className="border-gray-400 border-[2px] rounded-md h-9 w-52 md:w-80 "
                    />
                    <div className="text-white">
                      {errors.user_name &&
                        touched.user_name &&
                        errors.user_name}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <Field
                    name="user_email"
                    id="user_email"
                    placeholder="Email"
                    className="border-gray-400 border-[2px] rounded-md h-9 w-52 md:w-80"
                  />
                  <div className="text-white">
                    {errors.user_email &&
                      touched.user_email &&
                      errors.user_email}
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
                    name="message"
                    id="message"
                    placeholder="Texto"
                    className="border-gray-400 border-[2px] rounded-md h-36 w-80"
                  />
                  <div className="text-white">
                    {errors.message && touched.message && errors.message}
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
