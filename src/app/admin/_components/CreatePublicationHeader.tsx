import PlusIcon from '@/components/icons/PlusIcon'
import CustomButton from '@/components/custom-button'
import CancelIcon from '@/components/icons/CancelIcon'
import SaveIcon from '@/components/icons/SaveIcon'

export default function CreatePublicationHeader() {
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
            className="flex gap-2 items-center normal-case"
            props={{
              href: '/admin/science',
              type: 'link',
            }}
            type="regular"
          ><CancelIcon className="size-8" />Відхилити
          </CustomButton>
          <CustomButton
            className="flex gap-2 items-center normal-case whitespace-nowrap !p-4"
            type="regular"
          ><SaveIcon className="size-6" />Створити та зберегти
          </CustomButton>
        </div>
      </div>
    </>
  )
}
