import React from 'react'
import Header from './sections/Header' 
import Hero from './sections/Hero';
import About from './sections/About';
import './App.css';
import MarketPartnerts from './sections/MarketAndPartnests';
import Company from './sections/Company';
import JoinTeam from './sections/joinTeam';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


const App = () => {
  return (
    <main className='overflow-x-hidden relative min-h-[200vh] bg-black-100'> 
      <Header/>
      <Hero/>

      <About/>
      <MarketPartnerts/> 
      
      <Company/> 
      <JoinTeam/>
      <Contact/>
      <Footer/>
      
    </main>
  )
}

export default App
