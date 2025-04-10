import Estate from "../assets/service.png"

const Services = () => {
  return (
    <section className='grid grid-cols-2 h-[500px] gap-x-3 text-white bg-[#323C24] p-8 '>
        <img src={Estate} alt="estate" className="rounded-4xl h-[450px] object-center object-cover"/>

        <aside className="">
        <h2  className="text-3xl z-10 font-medium uppercase mt-4 tracking-wider -ml-24">Our Services: Sale, <br /> Rental, Counsultaions</h2>

            <div className="flex items-center space-x-4 my-8 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus facere assumenda eum excepturi veniam quae asperiores facilis, voluptatibus obcaecati deserunt aperiam. Itaque in quae obcaecati.</p>
            </div>
        </aside>
    </section>
  )
}

export default Services