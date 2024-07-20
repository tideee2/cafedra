export default function InlineLoader({ ...props }) {
  return (
    <div {...props} className="w-full h-full flex items-center justify-center opacity-10 z-10 scale-150 my-3">
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
