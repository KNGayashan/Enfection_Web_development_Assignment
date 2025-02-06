import './App.css'
import CopyrightSection from './components/custom/CopyrightSection'
import EmailSection from './components/custom/EmailSection'
import Footer from './components/custom/Footer'
import Hero from './components/custom/Hero'
import PartnersSection from './components/custom/PartnersSection'
import PhoneSection from './components/custom/PhoneSection'
import TextBoxSection from './components/custom/TextBoxSection'
import TextSection from './components/custom/TextSection'
import UiSection from './components/custom/UiSection'
import VrSection from './components/custom/VrSection'


function App() {


  return (
    <>
      <Hero />
      <TextSection/>
      <PhoneSection/>
      <UiSection/>
      <VrSection/>
      <TextBoxSection/>
      <PartnersSection/>
      <EmailSection/>
      <Footer/>
      <CopyrightSection/>
    </>
  )
}

export default App
