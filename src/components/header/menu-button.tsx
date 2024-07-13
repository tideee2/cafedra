// todo find how to fix props type
export default function HeaderMenuButton({ onClick }: any) {
  return (
    <>
      <button
        aria-controls="mobile-menu"
        aria-expanded="false"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-update-primary hover:text-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={onClick}
        type="button"
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <svg
          aria-hidden="true"
          className="block h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          aria-hidden="true"
          className="hidden h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  )
}
