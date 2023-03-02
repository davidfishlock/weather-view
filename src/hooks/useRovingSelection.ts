import { useState } from 'react'
import { useElementKeyDown } from './useKeyDown'

const useRovingSelection = (target: HTMLElement | null, totalItems: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(
        selectedIndex === totalItems - 1 || selectedIndex === undefined ? 0 : selectedIndex + 1,
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(
        selectedIndex === 0 || selectedIndex === undefined ? totalItems - 1 : selectedIndex - 1,
      )
    }
  }

  useElementKeyDown(target, onKeyDown)

  return { selectedIndex, setSelectedIndex }
}

export default useRovingSelection
