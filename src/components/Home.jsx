import Image from '../assets/home.png'
import Rating from '../shared/Rating'
import Image2 from '../assets/faq.avif'
const Home = () => {
  return (
    <section className='flex h-auto px-10 pb-10 text-black my-6'>
          <div className="flex flex-col space-y-10  mr-8 flex-1">
            <div className="flex flex-col items-center justify-center">
                 <div className="w-20 h-20 rounded-full border border-black/30 flex items-center justify-center relative">
                    8K+
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 absolute -bottom-1.5 text-black/80">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                 </div>
                 <p className="font-medium mt-3 opacity-70 text-center text-sm">Clients all over kenya</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                 <div className="w-20 h-20 rounded-full border border-black/30 flex items-center justify-center relative">
                    50
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 absolute -bottom-1.5 text-black/80">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                 </div>
                 <p className="font-medium  mt-3 opacity-70 text-center text-sm">Skilled team members</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                 <div className="w-20 h-20 rounded-full border border-black/30 flex items-center justify-center relative">
                    12M+

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 absolute -bottom-1.5 text-black/80">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                 </div>
                 <p className="font-medium mt-3 opacity-70 text-center text-sm">Money valued project completed</p>
                 
            </div>
          </div>
          <div className="w-5/12 relative">
                  <h1 className="text-7xl tracking-wider font-medium">Real Estate Agency You Trust</h1>

                  <p className="text-sm my-6">At Stewards Agencies, we specialize in helping you buy, sell, rent, and invest in the best properties across Nairobi and beyond. Whether you’re searching for a dream home, a high-return investment, or expert property management services, we are committed to delivering excellence.</p>

                  <div className="flex items-center space-x-5 mb-10">
                           <a href="#" className="uppercase px-6 py-3 bg-[#323C24] text-white rounded-full hover:bg-[#323C24]/90 duration-300">Book a free call</a>
                           <a href="#" className="uppercase px-6 py-3 text-[#323C24] border-2 border-black/30 rounded-full hover:border-[#323C24] duration-300">Learn more</a>
                  </div>

                  <div className="bg-[#323C24]/10 rounded-2xl p-5 h-40 min-w-[700px] -right-48 absolute flex justify-between space-x-4 ">

                       <div>
                        <h3 className="font-semibold flex space-x-2 items-center"><span>4.9 </span><Rating/> </h3>
                           <p className="text-sm"><span>13k+</span> <span className="opacity-60">Reviews</span></p>
                       </div>

                       <div className="text-xs w-1/2 self-center">
                         Why Choose Stewards Agencies?
                         <ul className="list-disc pl-5">
                              <li>Deep Market Knowledge</li>
                              <li>Wide Selection of Properties</li>
                              <li>Personalized Service & Professionalism</li>
                              <li>Smooth & Transparent Transactions</li>
                         </ul>
                       </div>

                       <div className="h-24 w-24 rounded-2xl bg-center bg-cover relative" style={{ backgroundImage: `url(${Image2})`}}>
                        <div className="h-10 w-10 rounded-full flex items-center justify-center text-white absolute bg-[#323C24] top-1/3 -left-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
</svg>

                        </div>
                       </div>
                  
                  </div>
          </div>
          <div className="w-6/12">
               <img src={Image} alt="hero" className='object-center object-cover  h-[600px]' />
          </div>
    </section>
  )
}

export default Home