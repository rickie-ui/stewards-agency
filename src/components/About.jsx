import Star from "@/assets/Sparkles.png";
import User from "@/assets/faq.avif";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rating from "../shared/Rating";

const About = () => {
  return (
    <section className="grid grid-cols-2 gap-8 bg-white text-black p-10">
    <aside className="">
        <h2  className="text-3xl z-10 font-medium uppercase tracking-wider">About Us: A Reliable partner in Real estate</h2>

        <div className="flex items-center space-x-4 my-8 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-28">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus facere assumenda eum excepturi veniam quae asperiores facilis, voluptatibus obcaecati deserunt aperiam. Itaque in quae obcaecati.</p>
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
            <h2 className="font-semibold text-lg">Mathew S</h2>
           <Rating/>
          </div>
          </div>
          <p className="opacity-70 mt-8 font-medium text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam nesciunt, quae magnam facere soluta cum distinctio sint laudantium quibusdam sunt perspiciatis, a numquam et sapiente qui consectetur eum. Labore earum ipsam a obcaecati exercitationem.</p>
   
      </SwiperSlide>
      <SwiperSlide  className=" min-h-auto min-w-[250px] border-2 rounded-3xl border-[#323C24] p-4">
        <div className="flex items-center gap-x-5">
          <img src={User} alt="" className="h-14 w-14 object-cover object-center  rounded-full border-2" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Mathew S</h2>
           <Rating/>
          </div>
          </div>
          <p className="opacity-70 mt-8 font-medium text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam nesciunt, quae magnam facere soluta cum distinctio sint laudantium quibusdam sunt perspiciatis, a numquam et sapiente qui consectetur eum. Labore earum ipsam a obcaecati exercitationem.</p>
   
      </SwiperSlide>
      <SwiperSlide  className=" min-h-auto min-w-[250px] border-2 rounded-3xl border-[#323C24] p-4">
        <div className="flex items-center gap-x-5">
          <img src={User} alt="" className="h-14 w-14 object-cover object-center  rounded-full border-2" />
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Mathew S</h2>
           <Rating/>
          </div>
          </div>
          <p className="opacity-70 mt-8 font-medium text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam nesciunt, quae magnam facere soluta cum distinctio sint laudantium quibusdam sunt perspiciatis, a numquam et sapiente qui consectetur eum. Labore earum ipsam a obcaecati exercitationem.</p>
   
      </SwiperSlide>
    </Swiper>
      </aside>
      <div className="bg-cover bg-center rounded-4xl relative"   style={{ backgroundImage: `url(${User})` }}>
               <div className="bg-white w-9/12 h-52  absolute left-5 rounded-4xl bottom-5 p-10">
                   <h3>Steward Agencies</h3>

                   <div className="flex space-x-2 items-center opacity-60 text-xs mt-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <p>We build the future</p>
                   </div>

                   <p className="uppercase text-base font-semibold mt-1 mb-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi facilis rerum nulla nostrum officiis nisi velit quo labore at?</p>
               </div>

               <div className="absolute h-40 w-28 top-0 right-0 rounded-r-4xl  bg-white"></div>
      </div>
    </section>
  )
}

export default About