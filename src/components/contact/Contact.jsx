
import "./contact.css"

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
  return (
    <div className="contact"></div>
  )
}

export default Contact 