import { Enums } from '../enums'
import { config } from '../config'

export async function handleRes({ res }: { res: Response }) {
  if (!res.ok) {
    const json = await res.json()
    throw new Error(json.error.message)
  }

  return res.json()
}

function createQueryParams(queries: Record<string, string | number>): string {
  const queryParams = Object.entries(queries)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&')
  return queryParams
}

const request = async ({
  method,
  path,
  body,
  queries
}: {
  method: Enums.Verb
  path: string
  body?: any
  queries?: Record<string, string | number>
}) => {
  const url = `${config.BASE_API_PATH}${path}` + (queries ? `?${createQueryParams(queries)}` : '')

  const res = await fetch(url.toString(), {
    method: method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await handleRes({ res })
}

export const http = {
  post: async (url: string, data?: any) => await request({ method: Enums.Verb.POST, path: url, body: data }),
  get: async (url: string, queries?: Record<string, string | number>) =>
    await request({ method: Enums.Verb.GET, path: url, queries }),
  patch: async (url: string, data: any) => await request({ method: Enums.Verb.PATCH, path: url, body: data }),
  delete: async (url: string, data?: any) => await request({ method: Enums.Verb.DELETE, path: url, body: data })
}
