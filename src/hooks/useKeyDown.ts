import { useCallback, useEffect } from 'react'

const useKeyDown = (target: HTMLElement | null, onKeyDown: (e: KeyboardEvent) => void) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => onKeyDown(e), [onKeyDown])

  useEffect(() => {
    if (!target) {
      return
    }
    target.addEventListener('keydown', handleKeyDown, false)

    return () => {
      target?.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [target, onKeyDown])
}

export default useKeyDown
