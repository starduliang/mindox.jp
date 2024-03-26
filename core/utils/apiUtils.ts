import { Errors } from '../errors'

import { StandardError, SuccessResponse } from '../../shared/types/api_types'
import { NextRequest, NextResponse } from 'next/server'

export interface BaseHandlerParams<T = any> {
  params: T
}

export interface HandlerParams<T> extends BaseHandlerParams<T> {
  httpReq: NextRequest
}

export type APIHandlerType = {
  handler: (params: HandlerParams<any>) => Promise<any>
  reqAdaptor?: (req: NextRequest) => any
}

export const handle = ({ handler, reqAdaptor }: APIHandlerType) => {
  return async (req: NextRequest) => {
    try {
      const body = await req.json()
      const params = reqAdaptor ? reqAdaptor(req) : body
      const response = await handler({ params, httpReq: req })
      return NextResponse.json(response)
    } catch (error: any) {
      handleError(error)
    }
  }
}

export const getAPIHandler = ({ handler, reqAdaptor }: APIHandlerType) => handle({ handler, reqAdaptor })

export const handleError = (error: Error) => {
  console.error(error, error.stack)
  if (error instanceof Errors.BusinessError) {
    return NextResponse.json(standardError(error.code, error.message), { status: error.code })
  } else {
    return NextResponse.json(standardError(500, 'messages.error.unexpected'), { status: 500 })
  }
}

export const standardError = (code: number, message: string): StandardError => {
  return {
    error: {
      code,
      message
    }
  }
}

export const successResponse = (resourceId: string, message: string): SuccessResponse => {
  return {
    resourceId,
    message
  }
}

export type APIFunction<RequestType, ResponseType> = (params: BaseHandlerParams<RequestType>) => Promise<ResponseType>
