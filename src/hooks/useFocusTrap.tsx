import React, { useRef, useEffect, ReactElement } from 'react'

const KEYCODE_TAB = 9

export const useFocusTrap = <T extends HTMLElement>() => {
  const rootElement = useRef<T>(null)

  function handleFocus(e: KeyboardEvent) {
    if (!rootElement.current) {
      return
    }

    const focusableElements = Array.from(
      rootElement.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
      ),
    ) as HTMLElement[]

    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    const isTabbing = e.key === 'Tab' || e.keyCode === KEYCODE_TAB

    if (!isTabbing) {
      return
    }

    if (e.shiftKey && document.activeElement === firstFocusable) {
      lastFocusable.focus()
      e.preventDefault()
    } else if (document.activeElement === lastFocusable) {
      firstFocusable.focus()
      e.preventDefault()
    }
  }

  useEffect(() => {
    rootElement.current?.addEventListener('keydown', handleFocus)
    return () => rootElement.current?.removeEventListener('keydown', handleFocus)
  }, [])

  return rootElement
}

type Props = {
  children: ReactElement
}

export const FocusTrap: React.FC<Props> = (props) => {
  const rootElementRef = useFocusTrap<HTMLDivElement>()

  return <div ref={rootElementRef}>{props.children}</div>
}
