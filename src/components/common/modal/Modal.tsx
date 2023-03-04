import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { strings } from '../../../constants/strings'
import useLockBodyScroll from '../../../hooks/useLockBodyScroll'
import useKeyDown from '../../../hooks/useKeyDown'
import { FocusTrap } from '../../../hooks/useFocusTrap'

type Props = {
  title: string
  onClose: () => void
  children: ReactNode
}

const Modal: React.FC<Props> = ({ title, onClose, children }) => {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const [previousFocus, setPreviousFocus] = useState<HTMLElement | null>(null)

  useLockBodyScroll(true)

  useEffect(() => {
    if (headerRef.current) {
      setPreviousFocus(document.activeElement as HTMLElement)
      headerRef.current.focus()
    }
  }, [headerRef])

  const closeModal = () => {
    onClose()

    if (previousFocus) {
      previousFocus.focus?.()
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      closeModal()
    }
  }

  useKeyDown(onKeyDown)

  return (
    <div
      className="absolute left-0 top-0 h-screen w-full bg-black bg-opacity-70 flex z-30 justify-center items-center"
      onClick={function (e) {
        if (e.currentTarget === e.target) {
          closeModal()
        }
      }}
    >
      <div className="max-w-2xl max-h-full flex">
        <div
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          className="default-background m-4 px-8 py-6 rounded-2xl"
        >
          <FocusTrap className="flex flex-col max-h-full">
            <>
              <div className="flex flex-row justify-between items-center mb-4">
                <h2 ref={headerRef} tabIndex={-1} className="strong-text text-2xl" id="modal-title">
                  {title}
                </h2>
                <button
                  className="button-subtle p-2"
                  type="button"
                  onClick={closeModal}
                  aria-label={strings.MODAL_CLOSE}
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              <div className="overflow-y-auto -mr-4 pr-4">{children}</div>
            </>
          </FocusTrap>
        </div>
      </div>
    </div>
  )
}

export default Modal
