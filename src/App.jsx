import '../public/style.scss'
import AboutMe from './AboutMe/AboutMe'
import AboutTherapy from './AboutTherapy/AboutTherapy'
import Faq from './Faq/FAQ'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'

function App() {

  return (
    <div>
      <HomePage />
      <AboutTherapy />
      <AboutMe />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
