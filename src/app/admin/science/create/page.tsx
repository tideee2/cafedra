import CustomButton from '@/components/custom-button'
import PlusIcon from '@/components/icons/PlusIcon'
import SaveIcon from '@/components/icons/SaveIcon'
import CancelIcon from '@/components/icons/CancelIcon'
import EditPublicationTemplate from '@/app/admin/_components/EditPublicationTemplate'

export default function ScienceAdminPageCreate() {
  return (
    <>
      <main className="flex flex-col p-20">
        <div className="flex justify-between pb-14">
          <h1 className="font-black text-5xl text-update-primary flex gap-2 items-center"><PlusIcon
            className="size-10"
          />Створення публікації
          </h1>

          <div className="flex gap-2">
            <CustomButton
              className="flex gap-2 items-center normal-case !p-2"
              type="regular"
            ><CancelIcon className="size-6" />Відхилити
            </CustomButton>
            <CustomButton
              className="flex gap-2 items-center normal-case whitespace-nowrap !p-4"
              type="regular"
            ><SaveIcon className="size-6" />Створити та зберегти
            </CustomButton>
          </div>
        </div>

        <EditPublicationTemplate />
      </main>
    </>
  )
}
