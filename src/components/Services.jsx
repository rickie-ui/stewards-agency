import Estate from "../assets/service.png"

const Services = () => {
  return (
    <section className='grid grid-cols-2 h-auto gap-x-3 text-white bg-[#323C24] p-8 '>

      <div>
          <img src={Estate} alt="estate" className="rounded-4xl h-[450px] object-center object-cover"/>

          <h3 className="mt-5">&#x21aa; Property Management</h3>
            <p className="my-1 ml-3">Maximize your rental income while we handle everything for you.</p>
                <ul className="list-disc ml-10">
                    <li>Tenant screening & lease management</li>
                    <li>Maintenance, repairs & inspections</li>
                    <li>Rent collection & financial reporting</li>
                </ul>

            <h3 className="mt-2">&#x21aa; Real Estate Consultancy</h3>
            <p className="my-1 ml-3">Get expert guidance on property investments, legal matters, and market trends. <br />Why Invest in Nairobi Real Estate?</p>
                <ul className="list-disc ml-10">
                    <li>Rapid Growth: Nairobi’s property market is thriving, with increasing demand.</li>
                    <li>Prime Locations: We provide access to top-tier properties in key areas.</li>
                    <li>High Returns: Nairobi’s rental and investment market offers.</li>
                </ul>
      </div>
      

        

        <aside className="">
        <h2  className="text-3xl z-10 font-medium uppercase mt-4 tracking-wider -ml-24">Our Services: Sale, <br /> Rental, Counsultaions</h2>

            <div className="flex items-center space-x-4 my-8 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                <p>We offer services for buying, selling and renting real estate. We guarantee secure agreements,legal support and an individual approach to each client.</p>
            </div>
            <h3>&#x21aa; Property Sales & Investments</h3>
            <p className="my-1 ml-3">Looking to buy or sell property in Nairobi? Our experts will guide you through every step of the process.</p>
                <ul className="list-disc ml-10">
                    <li>Residential Sales: Apartments, townhouses, and luxury homes</li>
                    <li>Commercial Sales: Office spaces, retail properties, and land investments</li>
                    <li>Investment Advisory: Market analysis, property valuation, and ROI assessment</li>
                </ul>

            <h3 className="mt-2">&#x21aa; Rentals & Leasing</h3>
            <p className="my-1 ml-3">We connect tenants with landlords and ensure smooth rental agreements.</p>
                <ul className="list-disc ml-10">
                    <li>Residential Rentals: Short-term and long-term options</li>
                    <li>Commercial Leasing: Office spaces, shops, and industrial properties</li>
                </ul>
        </aside>
    </section>
  )
}

export default Services