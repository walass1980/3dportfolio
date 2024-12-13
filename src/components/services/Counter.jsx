import { useInView, animate } from "motion/react"
import { useEffect, useRef, useState } from "react"


const Counter = ({from, to, text}) => {
  const [count, setCount] = useState(from)

  const ref = useRef()
 
  const isInView = useInView(ref)

  useEffect(()=> {
    const animate = animate(from, to, {
        duration: 4,
        ease: 'easeOut',
        onUppdate: (prev)=> {
            setCount(Math.floor(prev))
        }
    })
    return ()=> animate.cancel()
  }, [isInView, from, to])

  return (
    <div className="counter">
        <h1>{count}+</h1>
        <p>{text}</p>
    </div>
  )
}

export default Counter