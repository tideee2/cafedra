import type { ChangeEvent } from 'react'
import { forwardRef, useId, useRef, useState } from 'react'
import LoadIcon from '@/components/icons/LoadIcon'

interface ICustomFileInputProps {
  id: string
  labelText: string
  filePath?: string
  fileUrlValue: string
  className: string | string[]
  fileChange: (file: File) => void
}
export type Ref = HTMLInputElement
export default forwardRef<Ref, Partial<ICustomFileInputProps>>(function CustomFileInput(
  {
    id,
    filePath,
    labelText = 'Зображення',
    fileUrlValue,
    className,
    fileChange,
    ...props
  },
  ref,
) {
  const fileInput = useRef<HTMLInputElement | null>(null)
  const [localFilePath, setFilePath] = useState<string | undefined>(filePath)
  const uniqId = useId()
  if (!id) {
    id = uniqId
  }
  const onAddFile = () => {}
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files?.length) {
      return
    }

    setFilePath(URL.createObjectURL(e.target.files[0]))
    if (!fileChange) {
      return
    }
    fileChange(e.target.files[0])
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-1 flex-grow" hidden={!localFilePath}>
          <div className="text-lg font-bold">{labelText}</div>
          <div className="w-40 h-[100px] mb-4 border-2 overflow-hidden">
            <img className="w-full h-auto" src={localFilePath} />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <span className="text-xs text-red-700" hidden={!!localFilePath}>Файл не додано</span>
          <input
            accept="image/*"
            defaultValue={fileUrlValue}
            hidden={true}
            id={id}
            onInput={onChangeFile}
            ref={fileInput}
            type="file"
            {...props}
          />
          <label className="flex gap-2 items-center !p-4 self-end text-sm bg-light-green text-update-primary font-bold uppercase rounded-lg font-calibri hover:opacity-80 cursor-pointer" htmlFor={id}>
            <LoadIcon className="size-6" />
            <span className="whitespace-nowrap">Замінити зображення</span>
          </label>
        </div>
      </div>
    </>
  )
})
