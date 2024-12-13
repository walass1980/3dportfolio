import "./services.css"
import ComputerModelContainer from "./computer/ComputerModelContainer"
import MugModelContainer from "./mug/MugModelContainer"
import ConsoleModelContainer from "./console/ConsoleModelContainer"
import { useRef, useState } from "react"
import { useInView } from "motion/react"

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate:{
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}

const listVariants = {
  initial:{
    x: -100,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    }
  }
}

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Product Deseign",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Branding",
    counter: 46,
  },
]

const Services = () => {
  const [currentServiceId, setCurrentId] = useState(1)
  const ref = useRef()
  const useInView = useInView(ref, { margin: "-200px"})

  return (
    <div className="services">
      <div className="sSection left">
        <h1 className="sTitle">How do I help us?</h1>
        <div className="serviceList">
          <div className="service">
            <div className="serviceIcon">
              <img src="/service1.png" alt="" />
            </div>
            <div className="serviceInfo">
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
              <h3>3 projects</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ?(
          <ComputerModelContainer/>
        ) : currentServiceId === 2 ? (
          <MugModelContainer/>
        ) : currentServiceId === 3 (
          <ConsoleModelContainer/>
        )}
      </div>
    </div>
  )
}

export default Services