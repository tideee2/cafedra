import type { ReactNode } from 'react'
import Link from 'next/link'
// todo replace type, href to props
interface Props {
  children: ReactNode
  className: string
  outlined: string
  href: string
  type: string
  onClick: (x?: any) => void
  [key: string]: string | any
}
export default function CustomButton(
  { children, className, type, onClick, outlined, href, ...props }:
  Partial<Props>,
) {
  const classes = []
  if (outlined) {
    classes.push('w-full border-2 border-primary bg-white')
  }

  if (type === 'regular' || type === 'regularLink') {
    classes.push('bg-light-green text-update-primary font-bold uppercase rounded-lg font-calibri text-2xl')
  }
  else {
    classes.push('bg-primary text-text-primary text-lg font-bold')
  }
  if (type === 'link' || type === 'regularLink') {
    return (
      <>
        <Link
          className={`w-fit self-center text-center text-text-primary text-xl font-bold hover:opacity-80 py-5 px-6 ${classes} ${className}`}
          href={href || ''}
          {...props}
        >
          { children }
        </Link>
      </>
    )
  }
  return (
    <button
      {...props}
      className={`hover:opacity-80 ${classes} ${className} py-5 px-6 disabled:cursor-not-allowed disabled:bg-gray disabled:hover:opacity-100`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
