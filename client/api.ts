import API from '@/shared/API'
import { http } from '@/core/utils/httpUtils'

export const api: API = {
  createInquiry: async () => await http.get('/api/v1/inquiry')
}

export default api
