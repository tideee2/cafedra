import type { ReactNode } from 'react'
import Link from 'next/link'
// todo replace type, href to props
export default function CustomButton(
  { props, children, className, type, onClick }:
  Partial<{ children: ReactNode, props: any, className: string, type: string, onClick: () => void }>,
) {
  const classes = []
  if (props?.outlined) {
    classes.push('w-full border-2 border-primary bg-white')
  }

  if (type === 'regular') {
    classes.push('bg-light-green text-update-primary font-bold uppercase rounded-lg font-calibri text-2xl')
  }
  else {
    classes.push('bg-primary text-text-primary text-lg font-bold')
  }
  if (props?.type === 'link') {
    return (
      <>
        <Link
          className={`w-fit self-center text-center text-text-primary text-xl font-bold hover:opacity-80 py-5 px-6 ${classes} ${className}`}
          href={props.href}
        >
          { children }
        </Link>
      </>
    )
  }
  return (
    <button
      className={`hover:opacity-80 ${classes} ${className} py-5 px-6`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
