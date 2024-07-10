import type { ReactNode } from 'react'
import Link from 'next/link'

export default function CustomButton({ props, children, className }: Partial<{ children: ReactNode, props: any, className: string }>) {
  const classes = []
  if (props?.outlined) {
    classes.push('w-full border-2 border-primary bg-white')
  }
  if (props?.type === 'link') {
    return (
      <>
        <Link
          className={`bg-primary text-text-primary text-lg font-bold hover:opacity-80 py-5 px-6 ${classes} ${className}`}
          href={props.href}
        >
          { children }
        </Link>
      </>
    )
  }
  return (
    <button
      className={`bg-primary text-text-primary text-lg font-bold hover:opacity-80 py-5 px-6 ${classes} ${className}`}
    >
      {children}
    </button>
  )
}
