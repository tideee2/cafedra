import { useEffect } from 'react'

export function useKeyDown(callback: Function, keys: any) {
  const onKeyDown = (event: KeyboardEvent) => {
    const wasAnyKeyPressed = keys.includes(event.key)
    if (wasAnyKeyPressed) {
      event.preventDefault()
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
}
