import "./services.css"
import ComputerModelContainer from "./computer/ComputerModelContainer"
import MugModelContainer from "./mug/MugModelContainer"
import ConsoleModelContainer from "./console/ConsoleModelContainer"
import { useState } from "react"

const Services = () => {
  const [currentServiceId, setCurrentId] = useState(1)
  return (
    <div className="services">
      <div className="sSection left">
        <h1 className="sTitle">How do I help us?</h1>
        <div className="serviceList">
          <div className="service">
            <div className="serviceIcon">
              <img src="" alt="" />
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