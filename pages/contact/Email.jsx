import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik'
<<<<<<< HEAD
import mailSchema from '../Validations/Validations'
=======
import mailSchema from '../../api/Validations/Validations.js'
>>>>>>> 3a27e591c8ecfc7e45590b19d8495353ae728677

export default function Page() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          subject: '',
          text: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={mailSchema}
      >
        <Form>
          <label htmlFor="name">First Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="subject">Asunto</label>
          <Field id="subject" name="subject" />
          <label htmlFor="email">Descrpción</label>
          <Field id="text" name="text" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
