import type { BaseSyntheticEvent } from 'react'
import React, { useRef } from 'react'
import CustomButton from '@/components/custom-button'
import CancelIcon from '@/components/icons/CancelIcon'
import DeleteIcon from '@/components/icons/DeleteIcon'
import { useKeyDown } from '@/hooks/useKeyDown'

interface ModalDialogProps {
  showModal: boolean
  onCloseModal: () => void
  title: string
  description: string
  onAccept: () => void
  onCancel: () => void
  acceptText: string
  cancelText: string
}
export default function ModalDialog({
  showModal,
  onCloseModal,
  title,
  description,
  acceptText,
  cancelText,
  onAccept,
  onCancel,
}: Partial<ModalDialogProps>) {
  const area = useRef<HTMLDivElement>(null)
  function catchOutsideClick(event: BaseSyntheticEvent) {
    if (onCloseModal && event.target === area.current) {
      onCloseModal()
    }
  }
  function onCancelClick() {
    onCancel && onCancel()
    onCloseModal && onCloseModal()
  }
  function onAcceptClick() {
    onAccept && onAccept()
    onCloseModal && onCloseModal()
  }
  useKeyDown(() => {
    onCancelClick()
  }, ['Escape'])
  return (
    <div hidden={!showModal}>
      <div
        aria-hidden="true"
        className="flex overflow-y-auto bg-[#000000B2] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        id="default-modal"
        onClick={catchOutsideClick}
        ref={area}
        tabIndex={-1}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative p-5 bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 dark:border-gray-600">
              <h3 className="text-4xl font-black text-text-primary">
                {title}
              </h3>
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={onCloseModal}
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
            <div className="flex justify-between p-10 md:p-5">
              <CustomButton
                className="flex bg-secondary-blue2 gap-2 items-center text-lg py-2 px-5 font-bold text-gray-900 focus:outline-none"
                data-modal-hide="default-modal"
                onClick={onCancelClick}
                type="button"
              ><CancelIcon className="size-8" />{acceptText}
              </CustomButton>
              <CustomButton
                className="flex gap-2 items-center text-lg py-2 px-5 ms-3 font-bold text-white bg-custom-red"
                data-modal-hide="default-modal"
                onClick={onAcceptClick}
                type="button"
              ><DeleteIcon className="size-8" />{cancelText}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
