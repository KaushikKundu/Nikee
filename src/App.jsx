import './index.css'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Footer from './sections/Footer'
import './App.css'
function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'><Hero/></section>
      <section className='padding'><PopularProducts/></section>
      <section className='padding'><SpecialOffer/></section>
      <section className='padding'><CustomerReviews/></section>
      <section><Footer/></section>
    </main>
  )
}

export default App
