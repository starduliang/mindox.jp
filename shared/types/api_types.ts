// ↓↓↓ ---------- api types ----------
// core
export type StandardError = {
  error: {
    code: number
    message: string
  }
}
export type SuccessResponse = {
  resourceId: string
  message: string
}
// feature
export type CreateInquiryRequest = {
  companyName: string
  tel: string
  lastName: string
  firstName: string
  email: string
  inquiryDetails: string
}
export type CreateInquiryResponse = SuccessResponse

export type EMPTY = any
export * as HTTP from './api_types'

export interface BaseHandlerParams<T = any> {
  params: T
}

export type APIFunction<RequestType, ResponseType> = (params: BaseHandlerParams<RequestType>) => Promise<ResponseType>
