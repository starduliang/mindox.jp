import * as yup from 'yup'
import messages from './messages'

export const PATTERNS = {
  REQUIRED: yup.string().required(messages.REQUIRED),
  EMAIL: yup.string().email(messages.INVALID),
  TEL: yup.string().matches(/^(0{1}\d{1,4}-{0,1}\d{1,4}-{0,1}\d{4})$/, messages.INVALID)
}
