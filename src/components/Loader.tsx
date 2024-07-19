export default function Loader({ ...props }) {
  return (
    <div {...props} className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-300 opacity-10 z-10">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...
        </span>
      </div>
    </div>
  )
}
