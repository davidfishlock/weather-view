import { renderHook } from '@testing-library/react'
import useLockBodyScroll from './useLockBodyScroll'

describe('useLockBodyScroll', () => {
  test("shouldn't do anything if not locked", () => {
    const originalOverflow = 'auto'
    document.body.style.overflow = originalOverflow

    renderHook(() => useLockBodyScroll(false))

    expect(document.body.style.overflow).toEqual(originalOverflow)
  })

  test('locks viewport', () => {
    document.body.style.overflow = 'auto'

    renderHook(() => useLockBodyScroll(true))

    expect(document.body.style.overflow).toEqual('hidden')
  })

  test('restores original overflow on unmount', () => {
    const originalOverflow = 'auto'
    document.body.style.overflow = originalOverflow

    const { unmount } = renderHook(() => useLockBodyScroll(true))

    expect(document.body.style.overflow).toEqual('hidden')

    unmount()

    expect(document.body.style.overflow).toEqual(originalOverflow)
  })

  test('restores original overflow on unlock', () => {
    let isLocked = true
    const originalOverflow = 'auto'
    document.body.style.overflow = originalOverflow

    const { rerender } = renderHook(() => useLockBodyScroll(isLocked))

    expect(document.body.style.overflow).toEqual('hidden')

    isLocked = false
    rerender()

    expect(document.body.style.overflow).toEqual(originalOverflow)
  })
})
