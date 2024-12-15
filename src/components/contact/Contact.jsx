import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import ContactSvg from "./ContactSvg"

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggetChildren: 0.2,
    }
  }
}

const Contact = () => {
  const 
  return (
    <div className="contact">
      <div className="cSection">
        <form>
          <h1>Let's keep in touch</h1>
          <div className="formItem">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="John Doe" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input 
             type="email" 
             name="user_name"
             placeholder="john@gmail.com"
            />
          </div>
          <div className="formItem">
            <label>Message</label>
            <textarea 
             rows={10}
             name="user_message"
             placeholder="Write your message..."
            ></textarea>
          </div>
          <button className="formButton">
            Send
          </button>
        </form>
      </div>
      <div className="cSection"><ContactSvg/></div>
    </div>
  )
}

export default Contact 