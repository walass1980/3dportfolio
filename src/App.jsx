// import Contact from "./components/contact/Contact"
// import Hero from "./components/hero/Hero"
// import Portfolio from "./components/portfolio/Portfolio"
// import Services from "./components/services/Services"

import { lazy, Suspense } from "react"

const Hero = lazy(() => import("./components/hero/Hero"))
const Services = lazy(() => import("./components/services/Services"))
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"))
const Contact = lazy(() => import("./components/contact/Contact"))

const App = () => {

  return (
    <div className='container'>
      <Suspense fallback={"loading"}>
       <lazy height={"100vh"} offset={-100}>
        <section id="#home">
          <Hero/>
        </section>
       </lazy>
      </Suspense>
      <Suspense fallback={"loading"}>
        <lazy height={"100vh"} offset={-100}>
          <section id="#services">
           <Services/>
          </section>
        </lazy>
      </Suspense>
      <Suspense fallback={"loading"}>
        <lazy height={"100vh"} offset={-100}>
          {/* <section id="#portfolio"> */}
           <Portfolio/>
          {/*</section>*/}
        </lazy>
      </Suspense>
      <Suspense fallback={"loading"}>
        <lazy height={"100vh"} offset={-100}>
          <section id="#contact">
           <Contact/>
          </section>
        </lazy>
      </Suspense>
    </div>
  )
}

export default App