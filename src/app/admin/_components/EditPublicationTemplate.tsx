import CounterInput from '@/app/admin/_components/CounterInput'
import CustomButton from '@/components/custom-button'
import LoadIcon from '@/components/icons/LoadIcon'

export default function EditPublicationTemplate() {
  return (
    <>
      <div className="flex flex-col p-10 bg-white">
        <div className="w-full w-max[800px] ">
          <div className="pb-8">
            <CounterInput
              maxCount={120}
              title="Назва публікаці"
              type="regular"
            />
          </div>
          <div className="pb-8 flex justify-between gap-3">
            <CounterInput
              showCounter={false}
              title="Aвтор"
              type="regular"
            />
            <CounterInput
              placeholder="Введіть категорію"
              showCounter={false}
              title="Категорія"
              type="regular"
            />
            <CounterInput
              placeholder="Виберіть дату"
              showCounter={false}
              title="Дата публікаці"
              type="datepicker"
            />
          </div>
          <div className="pb-8">
            <CounterInput
              placeholder="Вступне слово про тему та її актуальність"
              showCounter={false}
              title="Вступне слово"
              type="textarea"
            />
          </div>
          <div className="flex gap-[120px]">
            <div className="flex flex-col gap-1 flex-grow">
              <div className="font-bold text-xl text-text-primary">Завантажте файл для повного ознайомлення</div>
              <div className="text-lg text-text-primary">Необхідний формат файлу: PDF</div>
            </div>
            <CustomButton className="flex gap-2 items-center !p-4" type="regular">
              <LoadIcon className="size-6" />
              <span>Завантажити файл</span>
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  )
}
