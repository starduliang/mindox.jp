import { getAPIHandler } from '@/core/utils/apiUtils'

const post = async () => {
  console.log('create inquiry!')
  return { message: 'success' }
}

export const POST = getAPIHandler({ handler: post })
