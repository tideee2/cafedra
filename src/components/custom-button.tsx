import type { ReactNode } from 'react'

export default function CustomButton({ props, children, className }: Partial<{ children: ReactNode, props: any, className: string }>) {
  const classes = []
  if (props?.outlined) {
    classes.push('w-full border-2 border-primary bg-white')
  }
  return (
    <button
      className={`bg-primary text-text-primary text-lg font-bold hover:opacity-80 py-5 px-6 ${classes}`}
    >
      {children}
    </button>
  )
}
