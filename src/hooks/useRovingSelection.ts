import { useState, KeyboardEvent } from 'react'

const useRovingSelection = (totalItems: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)

  const handleRovingKeyDown = (e: KeyboardEvent) => {
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

  return { selectedIndex, setSelectedIndex, handleRovingKeyDown }
}

export default useRovingSelection
