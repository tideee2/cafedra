import CustomButton from '@/components/custom-button'
import CancelIcon from '@/components/icons/CancelIcon'
import SaveIcon from '@/components/icons/SaveIcon'
import EditIcon from '@/components/icons/EditIcon'

export default function EditPublicationHeader() {
  return (
    <>
      <div className="flex justify-between pb-14">
        <h1 className="font-black text-5xl text-update-primary flex gap-2 items-center">
          <EditIcon
            className="size-10"
          />Редагування публікації
        </h1>

        <div className="flex gap-2">
          <CustomButton
            className="flex gap-2 items-center normal-case !p-4 self-center"
            href="/admin/science"
            type="regularLink"
          ><CancelIcon className="size-6" />Відхилити
          </CustomButton>
          <CustomButton
            className="flex gap-2 items-center normal-case whitespace-nowrap !p-4 !text-xl self-center"
            type="regular"
          ><SaveIcon className="size-6" />Зберегти зміни
          </CustomButton>
        </div>
      </div>
    </>
  )
}
