import PlusIcon from '@/components/icons/PlusIcon'
import CustomButton from '@/components/custom-button'
import CancelIcon from '@/components/icons/CancelIcon'
import SaveIcon from '@/components/icons/SaveIcon'

interface Props {
  onCancel?: (x: any) => void
  onSave?: (x: any) => void
  isDisabledSave?: boolean
}
export default function CreatePublicationHeader({ isDisabledSave = false, ...props }: Props) {
  const onSave = (x: any) => {
    if (props.onSave)
      props.onSave(x)
  }
  return (
    <>
      <div className="flex justify-between pb-14">
        <h1 className="font-black text-5xl text-update-primary flex gap-2 items-center">
          <PlusIcon
            className="size-10"
          />Створення публікації
        </h1>

        <div className="flex gap-2">
          <CustomButton
            className="flex gap-2 items-center normal-case !p-4"
            href="/admin/science"
            type="regularLink"
          ><CancelIcon className="size-6" />Відхилити
          </CustomButton>
          <CustomButton
            className="flex gap-2 items-center normal-case whitespace-nowrap !p-4 !text-xl self-center"
            disabled={isDisabledSave}
            onClick={(x: any) => onSave(x)}
            type="regular"
          ><SaveIcon className="size-6" />Створити та зберегти
          </CustomButton>
        </div>
      </div>
    </>
  )
}
