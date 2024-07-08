import Image from 'next/image'

export default function Header() {
  return (
    <>
      <header>
        <div className="logo-container">
          <Image alt="logo" height={100} src="/images/logo.svg" width={100} />
        </div>
      </header>
    </>
  )
}
