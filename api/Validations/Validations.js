import { object, string } from 'yup'

const mailSchema = object({
  name: string().required('Por favor ingresa tu nombre'),
  lastName: string().required('Por favor completa con tu apellido'),
  email: string().email('Por favor ingresa tu mail').required('Requerido'),
  subject: string().required('Requerido'),
  text: string().required('requerido'),
})
export default mailSchema
