import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

const App = () =>  {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen'>
            <Navbar />
            <Hero />
          </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
