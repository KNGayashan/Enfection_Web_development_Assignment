import './App.css'
import BodySection from './components/custom/BodySection'
import CopyrightSection from './components/custom/CopyrightSection'
import EmailSection from './components/custom/EmailSection'
import Footer from './components/custom/Footer'
import Hero from './components/custom/Hero'
import PartnersSection from './components/custom/PartnersSection'

import TextBoxSection from './components/custom/TextBoxSection'
import TextSection from './components/custom/TextSection'



function App() {


  return (
    <>
      <Hero />
      <TextSection/>
      
      <BodySection/> 
      {/* modified code - reduced components commented below
      <PhoneSection/>
      <UiSection/>
      <VrSection/> */}
      <TextBoxSection/>
      <PartnersSection/>
      <EmailSection/>
      <Footer/>
      <CopyrightSection/>
    </>
  )
}

export default App
