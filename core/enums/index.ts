export const Verb = {
  GET: 'GET',
  OPTIONS: 'OPTIONS',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
} as const
export type Verb = (typeof Verb)[keyof typeof Verb]

export * as Enums from './index'
