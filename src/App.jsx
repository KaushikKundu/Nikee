import './index.css'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'><Hero/></section>
      <section className='padding'><PopularProducts/></section>
      <section className='padding'>super quality</section>
      <section className='padding'>services</section>
      <section className='padding'>special offer</section>
      <section className='padding'>subscribe</section>
      <section className='padding'>reviews</section>
      <section className='padding'>footer</section>
    </main>
  )
}

export default App
