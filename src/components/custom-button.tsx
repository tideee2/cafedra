import type { ReactNode } from 'react'

export default function CustomButton({ children }: { children: ReactNode }) {
  return (
    <>
      <button className="bg-primary text-text-primary text-lg font-bold hover:opacity-80 py-5 px-6">
        {children}
      </button>
    </>
  )
}
