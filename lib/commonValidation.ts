import * as yup from 'yup'
import messages from './messages'

const commonValidation = {
  REQUIRED: yup.string().required(messages.REQUIRED),
  EMAIL: yup.string().required(messages.REQUIRED).email('not correct email')
}

export default commonValidation
