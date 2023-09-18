const KEYS = [
  'REQUIRED',
  'INVALID',
  'MIN_LENGTH',
  'MAX_LENGTH',
  'MIN_NUMBER',
  'MAX_NUMBER',
  'NO_MATCH',
  'INVALID_DATE',
  'MIN_DATE',
  'MAX_DATE',
  'INVALID_URL',
  'INVALID_PHONE'
] as const

type MessageKey = (typeof KEYS)[number]
export default MessageKey
