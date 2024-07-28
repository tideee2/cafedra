import Link from 'next/link'
import styles from './index.module.scss'

interface LogoProps {
  className: string
  type: string
  isShort: boolean
}
export default function HeaderLogo({ className, type, isShort }: Partial<LogoProps>) {
  const classes = `flex flex-shrink text-accent-green flex-grow-0 items-center hover:text-green hover:fill-primary ${styles.logoLink}`
  return (
    <Link className={classes + className} href="/">
      <svg
        className="w-20 h-full text-white"
        height="115"
        viewBox="0 0 183 115"
        width="183"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image
          height="115"
          id="icm_logo"
          width="183"
          xlinkHref="data:img/png;base64,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"
        />
      </svg>

      <h1 className={`${isShort ? 'hidden' : ''}  flex pl-1 lg:pl-2 hover:text-green font-bold uppercase text-sm lg:text-base ${type === 'sidebar' ? 'text-center' : 'min-w-40'}`}>Інформаційні<br />системи&nbsp;та<br />мережі
      </h1>
    </Link>
  )
}
