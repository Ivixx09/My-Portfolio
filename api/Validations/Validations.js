import * as Yup from 'yup'

const mailSchema = Yup.object().shape({
  name: Yup.string().required('Por favor ingresa tu nombre'),
  lastName: Yup.string().required('Por favor ingresa tu apellido'),
  email: Yup.string().email().required('Por favor ingresa tu mail'),
  subject: Yup.string().required('Requerido'),
  text: Yup.string().required('Requerido'),
})
export default mailSchema
