function Loader() {
  return (
    <div
      className='
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    '
    >
      <div className='flex flex-col items-center'>
        <div
          className='
          w-16
          h-16
          border-4
          border-blue-600
          border-t-transparent
          rounded-full
          animate-spin
        '
        ></div>

        <p className='mt-5 text-gray-600 font-semibold text-lg'>
          Loading...
        </p>
      </div>
    </div>
  )
}

export default Loader