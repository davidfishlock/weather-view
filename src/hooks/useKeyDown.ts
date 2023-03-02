import { useCallback, useEffect } from 'react'

export const useElementKeyDown = (
  target: HTMLElement | null,
  onKeyDown: (e: KeyboardEvent) => void,
) => {
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

export const useDocumentKeyDown = (onKeyDown: (e: KeyboardEvent) => void) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => onKeyDown(e), [onKeyDown])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)

    return () => {
      document?.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [document, onKeyDown])
}
