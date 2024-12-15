// import Contact from "./components/contact/Contact"
// import Hero from "./components/hero/Hero"
// import Portfolio from "./components/portfolio/Portfolio"
// import Services from "./components/services/Services"

import { lazy, Suspense } from "react"

const App = () => {

  return (
    <div className='container'>
      <section id="#home">
        <Hero/>
      </section>
      <section id="#services">
        <Services/>
      </section>
      <section id="#portfolio">
        <Portfolio/>
      </section>
      <section id="#contact">
        <Contact/>
      </section>
    </div>
  )
}

export default App