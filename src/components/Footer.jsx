const Footer = () => {
  return (
    <div className='h-72 py-10 w-full bg-white text-[#323C24] absolute bottom-0'>

      <div className=" h-52 grid grid-cols-5 gap-x-20 px-14">
        <div className="">
          <h2 className="font-semibold uppercase tracking-wider text-lg whitespace-nowrap">Stewards Agencies</h2>

          <p className="uppercase font-semibold opacity-80 text-sm my-4">We specialize in helping you buy, sell, rent, and invest in the best properties across Nairobi and beyond.</p>

          <p className="text-xs opacity-60 font-semibold">Nairobi, Kenya</p>
        </div>
        <div className="flex flex-col space-y-5 mt-12">
           <p className="opacity-80 text-sm font-semibold">
           P.O BOX 40894-00100 <br />
           Nairobi
           </p>
           <a href="#" className="uppercase px-6 py-2 whitespace-nowrap bg-[#323C24] text-white rounded-full">Book a free call</a>
        </div>
        <div className="flex flex-col space-y-6 font-medium">
          {['Home', 'Services', 'About Us', 'Contact'].map((text, idx) => (
            <a
              key={idx}
              href="#"
              className="relative inline-block text-gray-800 transition-opacity duration-300 hover:opacity-80 group"
            >
              <span className="relative z-10">{text}</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-gray-800 w-0 transition-all duration-300 group-hover:w-[40%]"></span>
            </a>
          ))}
        </div>



        <div className="">
            <h2 className='font-semibold mb-2 text-lg'>CONTACT US</h2>
            <p className="my-6 opacity-70 text-sm font-medium">
                stewardsagencies2022@gmail.com
            </p>
            <p className='font-semibold text-lg my-6'>
                +254 784 592364
            </p>
        </div>
        <div className="text-sm">
          <h2 className='font-semibold mb-2 text-lg'>FOLLOW US</h2>
             <div className="flex space-x-1 space-y-2 items-center">
                <div className="h-8 w-8 text-white rounded-full flex items-center justify-center bg-[#323C24]">
                    <i class="fa fa-facebook-f"></i>
                </div>
                <h3 className=' font-medium'>Facebook</h3>
             </div>
             <div className="flex space-x-1 space-y-2 items-center">
                <div className="h-8 w-8 text-white rounded-full flex items-center justify-center bg-[#323C24]">
                    <i class="fa fa-instagram"></i>
                </div>
                <h3 className=' font-medium'>Instagram</h3>
             </div>
             <div className="flex space-x-1 space-y-2 items-center">
                <div className="h-8 w-8 text-white rounded-full flex items-center justify-center bg-[#323C24]">
                    <i class="fa fa-twitter	"></i>
                </div>
                <h3 className=' font-medium'>Twitter</h3>
             </div>
             <div className="flex space-x-1 space-y-2 items-center">
                <div className="h-8 w-8 text-white rounded-full flex items-center justify-center bg-[#323C24]">
                    <i class="fa fa-pinterest"></i>
                </div>
                <h3 className=' font-medium'>Pinterest</h3>
             </div>
        </div>
      </div>
      

      <div className="bg-[#323C24] flex justify-between text-white h-12 items-center text-sm px-14">
        <div>
            &copy; { new Date().getFullYear()}  Steward Agencies. All Rights Reserved.
        </div>
        <div className="flex items-center space-x-14">
          <a href="#" className="">Terms of Service</a>
          <a href="#" className="">Privacy Policy</a>
          <a href="#" className="">Cookies</a>
        </div>
      </div>
    </div>
  )
}

export default Footer