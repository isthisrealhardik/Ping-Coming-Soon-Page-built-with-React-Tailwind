function App() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-start px-4 py-4 font-libre-franklin">
      <img src="/images/logo.svg" alt="Logo" className=" w-16 my-8" />
      <h1 className="text-gray-orignal font-light text-2xl sm:text-4xl">We are launching <span className=" text-very-dark-blue font-bold">soon!</span></h1>
      <p className=" text-very-dark-blue text-xs my-4 font-semibold sm:text-base sm:font-normal sm:my-3">Subscribe and get notified</p>
      <div className="my-4">
        <form action="#" className="flex flex-col justify-center sm:flex-row sm:items-center">
          <input required type="email" placeholder="Your email address..." className="bg-white rounded-full border-pale-blue border-solid border placeholder:text-pale-blue placeholder:text-xs placeholder:text-left py-2 sm:px-12 px-10 text-very-dark-blue font-semibold my-3"/>
          <button type='submit' className=" bg-blue-orignal shadow-lg font-semibold text-white rounded-full text-xs sm:px-10 sm:ml-2 sm:h-10 py-3 px-[114px] hover:bg-blue-400 transition">Notify me</button>
        </form>
      </div>
      <img src="/images/illustration-dashboard.png" alt="Illustration Dashboard" className="w-full px-2 my-12 sm:max-w-md sm:my-6"/>
      <p className="text-gray-orignal text-xs">@ Copyright Ping, All right reserved</p>
    </div>
  )
}

export default App
