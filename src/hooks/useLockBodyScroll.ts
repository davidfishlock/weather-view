import { useEffect } from 'react'

function useLockBodyScroll(isLocked: boolean): void {
  useEffect((): (() => void) => {
    const { overflow } = window.getComputedStyle(document.body)

    document.body.style.overflow = isLocked ? 'hidden' : overflow

    return () => (document.body.style.overflow = overflow)
  }, [isLocked])
}

export default useLockBodyScroll
