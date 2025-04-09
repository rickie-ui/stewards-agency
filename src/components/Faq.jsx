import Star from "@/assets/Sparkles.png";
import Accordion from "../shared/Accordion"

const Faq = () => {
  return (
    <section className="bg-[#323C24] h-[850px] p-10 w-full relative text-white">

        <div className="flex items-center space-x-5">
            <h2  className="text-3xl z-10 font-semibold uppercase">Frequently Asked Questions:</h2>
              <img src={Star} alt="star" className="absolute object-cover left-[30%]" />
            <p className="z-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem deserunt nobis, necessitatibus voluptatum accusamus consequatur odit repellendus ex error!</p>
        </div>

        <Accordion/>


    </section>
  )
}

export default Faq;
