import React from 'react'
import { FiX } from 'react-icons/fi'
import { strings } from '../../../constants/strings'
import useLockBodyScroll from '../../../hooks/useLockBodyScroll'

type Props = {
  title: string
  onClose: () => void
}

const Modal: React.FC<Props> = ({ title, onClose, children }) => {
  useLockBodyScroll(true)

  return (
    <div
      className="absolute left-0 top-0 h-screen w-full bg-black bg-opacity-70 flex z-30 justify-center items-center"
      onClick={function (e) {
        if (e.currentTarget === e.target) onClose()
      }}
    >
      <div className="max-w-2xl max-h-full flex">
        <div
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          className="flex flex-col flex-shrink default-background m-4 px-8 py-6 rounded-2xl"
        >
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="strong-text text-2xl" id="modal-title">
              {title}
            </h2>
            <button
              className="button-subtle p-2"
              type="button"
              onClick={onClose}
              aria-label={strings.MODAL_CLOSE}
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <div className="overflow-y-auto -mr-4 pr-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
