import { useState, useCallback } from 'react'

export function useInput(init: string) {
  const [value, setValue] = useState(init)

  const changeValue = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const v = target.value
      setValue(v)
    },
    [setValue]
  )

  return { value, setValue, changeValue }
}
