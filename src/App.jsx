import './App.css'
import AboutInnovator from './components/AboutInnovator'
import AboutProducts from './components/AboutProducts'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Products from './components/Products'
import ClientShowcase from './components/ShowcaseSection'
import BoafoWidgetInitializer from '../app/components/BoafoWidgetInitializer'

function App() {
  return (
    <div >
    <BoafoWidgetInitializer />
    <NavBar />
    <HeroSection />
    <AboutProducts />
    <Products />
   <AboutInnovator /> 
   <ClientShowcase />
    <Footer />
    </div>
  )
}

export default App
