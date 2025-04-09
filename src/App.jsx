import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Faq from "@/components/Faq"
import About from "@/components/About"
import Services from "./components/Services"
import Home from "./components/Home"
const App = () => {
  return (
    <div className="relative bg-white">
       <Header/>
       <Home/>
       <Services/>
       <About/>
       <Faq/>
       <Footer/>
    </div>
  )
}

export default App