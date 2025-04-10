import Star from "@/assets/Sparkles.png";
import User from "@/assets/about.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rating from "../shared/Rating";
import Stars from "../shared/Stars";

const About = () => {
  return (
    <>
    <section className="grid grid-cols-2 gap-8 bg-white text-black p-10">
    <aside className="">
        <h2  className="text-3xl z-10 font-medium uppercase tracking-wider">About Us: A Reliable partner in Real estate</h2>

        <div className="flex items-center space-x-4 my-8 text-sm">
            <Stars/>
            <p>Established in 2012, Stewards Agencies, seeks to be a leading Real Estate firm in Kenya and beyond. It is committed to assisting and stewarding locals and international clients to realise value of their money through Real Estate/Property investments. The firm is currently extending its tentacles towards commercial, residential and retail through Property Management, Estate Agency and Consultancy/Valuation Services.</p>
        </div>
        <div className="flex items-center space-x-4 my-8 text-sm">
            <Stars/>
            <p>At SA, we are in cognizant that whether commercial or residential, customers are not just searching for property to buy, but a place of value and memories. We endeavor to find the right premise in a seamless and enjoyable process for our clients. We place great emphasis on valued and trusted relationships over any other transactions.</p>
        </div>

        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={2}
      // navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    
    >
      <SwiperSlide  className=" min-h-auto min-w-[250px] border-2 rounded-3xl border-[#323C24] p-4">
        <div className="flex items-center gap-x-5">
          <img src={User} alt="" className="h-14 w-14 object-cover object-center  rounded-full border-2" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Samuel Otieno</h2>
           <Rating/>
          </div>
          </div>
          <p className="opacity-70 mt-8 font-medium text-xs">I recently sold my property through this agency, and I couldn’t be happier with the experience. Their communication was excellent, and they kept me updated every step of the way. If you're looking for a trustworthy agency to help you buy, sell, or rent in Kenya, look no further!</p>
   
      </SwiperSlide>
      <SwiperSlide  className=" min-h-auto min-w-[250px] border-2 rounded-3xl border-[#323C24] p-4">
        <div className="flex items-center gap-x-5">
          <img src={User} alt="" className="h-14 w-14 object-cover object-center  rounded-full border-2" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Mercy Njeri</h2>
           <Rating/>
          </div>
          </div>
          <p className="opacity-70 mt-8 font-medium text-xs">I had a wonderful experience with this agency when I was looking to rent a commercial space in Mombasa. Their team was very responsive and made the process easy and stress-free.I would definitely use them again and recommend them to others!</p>
   
      </SwiperSlide>
      <SwiperSlide  className=" min-h-auto min-w-[250px] border-2 rounded-3xl border-[#323C24] p-4">
        <div className="flex items-center gap-x-5">
          <img src={User} alt="" className="h-14 w-14 object-cover object-center  rounded-full border-2" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Jane Wambui</h2>
           <Rating/>
          </div>
          </div>
          <p className="opacity-70 mt-8 font-medium text-xs">I had the pleasure of working with this agency when I was looking for a new home in Nairobi.They showed me a variety of properties that fit my budget and preferences. I’m now happily settled in my new apartment. Highly recommend them for anyone looking to buy or rent in Kenya!</p>
   
      </SwiperSlide>
    </Swiper>
      </aside>
      <div className="bg-cover bg-center rounded-4xl relative"   style={{ backgroundImage: `url(${User})` }}>
               <div className="bg-white w-9/12 h-44  absolute left-10 rounded-4xl bottom-10 p-6">
                   <h3>Steward Agencies</h3>

                   <div className="flex space-x-2 items-center opacity-60 text-xs mt-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <p>We build the future</p>
                   </div>

                   <p className="uppercase text-sm font-semibold mt-1 mb-3">Our mission is to offer novel services through our trusted proficiency and helping our clients find value in their real estate requirements.</p>
               </div>
      </div>
    </section>

    <section className="grid grid-cols-3 mt-5 space-x-4 space-y-3 text-black p-10">
    <div>
        <h2>Core Values</h2>
        <p className="opacity-70 text-sm">
        Stewards Agencies holds that it is important to espouse one’s self to asset of values that guide the life business dealings. These values are a direct impression of what the firm stands for; 
        </p>
      </div>
      <div>
        <h2>Vision</h2>
        <p className="opacity-70 text-sm">
        To be the leading trusted real estate firm in Kenya and beyond in meeting clients needs and offering prompt unique Services. 
        </p>
      </div>
      <div>
        <h2>Excellence</h2>
        <p className="opacity-70 text-sm">
        We commit to provide quality services through adaptation of the dynamic Real Estate environment. As a service industry, SA employees are the guarantors of a sustainable, effective and quality service delivery. 
        </p>
      </div>
      <div>
        <h2>Integrity</h2>
        <p className="opacity-70 text-sm">
            Our honesty reflects in our everyday connections with all our valued stakeholders. 
        </p>
      </div>
      <div>
        <h2>Professionalism</h2>
        <p className="opacity-70 text-sm">
        We commit to have qualified and competent employees for and efficient performance thereby guaranteeing quick service delivery and prioritizing value for money. 
        </p>
      </div>
      <div>
        <h2>Responsiveness</h2>
        <p className="opacity-70 text-sm">
        We commit to meet and exceed the expectations of our clients in asset management, valuation and agency services. 
        </p>
      </div>
      <div>
        <h2>Teamwork</h2>
        <p className="opacity-70 text-sm">
        Our team is strongly aligned with the firm’s mission and vision in building trusted brand by working hand in hand.
        </p>
      </div>
     
    </section>
    </>
  )
}

export default About