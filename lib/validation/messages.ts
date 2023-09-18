import MessageKey from './keys'

const MESSAGES: Record<MessageKey, string> = {
  REQUIRED: '必須項目です',
  INVALID: '無効な入力です',
  MIN_LENGTH: '最小限の文字数は {0} です',
  MAX_LENGTH: '最大限の文字数は {0} です',
  MIN_NUMBER: '最小限の数値は {0} です',
  MAX_NUMBER: '最大限の数値は {0} です',
  NO_MATCH: '一致しません',
  INVALID_DATE: '有効な日付を入力してください',
  MIN_DATE: '{0} 以降の日付を入力してください',
  MAX_DATE: '{0} 以前の日付を入力してください',
  INVALID_URL: '有効なURLを入力してください',
  INVALID_PHONE: '有効な電話番号を入力してください'
}

export default MESSAGES
