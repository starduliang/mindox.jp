import { useState } from 'react'

type AnyObject = Record<string, any>

const setNestedValue = (obj: AnyObject, path: string, value: any): void => {
  const keys = path.split(/[.[]]/).filter(Boolean)
  let current = obj

  keys.slice(0, -1).forEach((key, i) => {
    current[key] = !isNaN(Number(keys[i + 1])) ? [] : current[key] || {}
    current = current[key]
  })

  current[keys[keys.length - 1]] = value
}

const useNState = <T extends AnyObject>(initialState: T) => {
  const [state, setState] = useState<T>(initialState)

  const patchState = (path: string, value: any) => {
    setState((prevState) => {
      const newState = { ...prevState }
      setNestedValue(newState, path, value)
      return newState
    })
  }

  return { state, setState, patchState } as const
}

export default useNState
