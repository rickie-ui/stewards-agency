const Accordion = () => {
  return (
    <div className=" w-11/12 mx-auto mt-8  grid grid-cols-2 gap-x-2 items-start">
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion" />
          <div className="collapse-title font-semibold">Who is Stewards Agencies?</div>
          <div className="collapse-content text-sm">Stewards Agencies is a real estate consultancy founded in 2015. Based in Nairobi, we specialize in property sales, lettings, property management, and real estate advisory services across Kenya.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">What services do you offer?</div>
          <div className="collapse-content text-sm">
          We offer a wide range of real estate services including:
            <ul className=" list-disc pl-5">
                  <li>Property sales and marketing</li>
                  <li>Rental and leasing services</li>
                  <li>Property management</li>
                  <li>Real estate investment consultancy</li>
                  <li>Land acquisition and development advisory</li>
            </ul>
         </div>
    </div>
    
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">Where are your offices located?</div>
          <div className="collapse-content text-sm">Our headquarters are in Nairobi, and we operate across key locations within Nairobi and its environs. We also work with clients interested in properties throughout Kenya.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">Do you deal with both residential and commercial properties?</div>
          <div className="collapse-content text-sm">Yes, we handle both residential and commercial properties including apartments, townhouses, office spaces, retail outlets, and land.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">How can I list my property with Stewards Agencies?</div>
          <div className="collapse-content text-sm">You can contact us directly through our website, email, or phone to schedule a consultation. We’ll guide you through the process of property valuation, marketing, and listing.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">What makes Stewards Agencies different?</div>
          <div className="collapse-content text-sm">We combine local market expertise with personalized service. With over a decade of experience, we are known for our integrity, professionalism, and results-driven approach tailored to each client’s goals.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">How do I know if a property is legitimate?</div>
          <div className="collapse-content text-sm">At Stewards Agencies, we conduct thorough due diligence on every property before listing or recommending it. We work with legal experts to verify titles, ownership, zoning, and all compliance aspects.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">Do you assist with legal documentation and processes?</div>
          <div className="collapse-content text-sm">Yes. We partner with trusted legal professionals to ensure smooth transactions and guide clients through legal and regulatory requirements, including transfers, leases, and sales agreements.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">Are your services limited to Kenya?</div>
          <div className="collapse-content text-sm">Our primary focus is Kenya, with Nairobi as our main hub. However, we also support diaspora clients and international investors looking to invest in Kenyan real estate.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">How can I get in touch with Stewards Agencies?</div>
          <div className="collapse-content text-sm">
          You can reach us through:
          <ul className=" list-disc pl-5">
                  <li>Phone: +254 784 592364</li>
                  <li>Email: stewardsagencies2022@gmail.com</li>
                  <li>Website: <span className="text-red-400">Coming soon</span></li>
                  <li>Social Media: Twitter, Facebook</li>
            </ul>
            Or visit our office in Nairobi to speak with a consultant directly.
          </div>
    </div>
</div>
  )
}

export default Accordion