export const formatMessage = (template: string, ...values: string[]) => {
  let message = template
  values.forEach((value, index) => {
    message = message.replace(`{${index}}`, value)
  })
  return message
}
