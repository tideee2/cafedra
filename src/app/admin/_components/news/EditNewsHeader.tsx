import CustomButton from '@/components/custom-button'
import CancelIcon from '@/components/icons/CancelIcon'
import SaveIcon from '@/components/icons/SaveIcon'
import EditIcon from '@/components/icons/EditIcon'

interface Props {
  onCancel?: (x: any) => void
  onSave?: (x: any) => void
  isDisabledSave?: boolean
  title: string
}
export default function EditNewsHeader({ title, isDisabledSave = false, ...props }: Props) {
  const onSave = (x: any) => {
    if (props.onSave)
      props.onSave(x)
  }
  return (
    <>
      <div className="flex justify-between pb-14">
        <h1 className="font-black text-5xl text-update-primary flex gap-2 items-center">
          <EditIcon
            className="size-10"
          />{title}
        </h1>

        <div className="flex gap-2">
          <CustomButton
            className="flex gap-2 items-center normal-case !p-4 self-center"
            href="/admin/news"
            type="regularLink"
          ><CancelIcon className="size-6" />Відхилити
          </CustomButton>
          <CustomButton
            className="flex gap-2 items-center normal-case whitespace-nowrap !p-4 !text-xl self-center"
            disabled={isDisabledSave}
            onClick={(x: any) => onSave(x)}
            type="regular"
          ><SaveIcon className="size-6" />Зберегти зміни
          </CustomButton>
        </div>
      </div>
    </>
  )
}
