import { useCallback, useEffect } from 'react'

const useKeyDown = (onKeyDown: (e: KeyboardEvent) => void) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => onKeyDown(e), [onKeyDown])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)

    return () => {
      document?.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [document, onKeyDown])
}

export default useKeyDown
