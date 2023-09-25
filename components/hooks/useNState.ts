import { useState } from 'react'

type AnyObject = {
  [key: string]: any
}

const setNestedValue = (obj: AnyObject, path: string, value: any): void => {
  const keys = path.split('.')
  let current = obj

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]

    if (!isNaN(Number(keys[i + 1]))) {
      if (!Array.isArray(current[key])) {
        current[key] = []
      }
    } else if (!current[key]) {
      current[key] = {}
    }

    current = current[key]
  }

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
