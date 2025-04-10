import Star from "@/assets/Sparkles.png";
import Accordion from "../shared/Accordion"

const Faq = () => {
  return (
    <section className="bg-[#323C24] min-h-[1000px] p-10 w-full relative text-white">

        <div className="flex items-center space-x-5">
            <h2  className="text-3xl z-10 font-medium uppercase whitespace-nowrap">Frequently Asked <br />Questions:</h2>
              <img src={Star} alt="star" className="absolute object-cover left-[30%]" />
            <p className="z-30">We answer the most frequently asked questions about what stewards agencies so you can quickly navigate the market and make informed decisions. Our experts will help you choose the best option for a comfortable stay.</p>
        </div>

        <Accordion/>


    </section>
  )
}

export default Faq;
