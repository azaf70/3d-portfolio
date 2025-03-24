import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech } from './components';
import { StarsCanvas } from './components/canvas';
import Toast from './components/Toast';

const App = () =>  {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0'>
          <Toast />
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
          </div>
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Feedbacks />
          <div className='relative z-0'>
            <Contact />
          </div>
          <StarsCanvas />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
