import type { ReactNode } from 'react'

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <main className="h-screen grid place-content-center bg-secondary-white">
        {children}
      </main>
    </>
  )
}
