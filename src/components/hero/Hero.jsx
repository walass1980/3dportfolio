import "./hero.css"
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        <h1 className="hTitle">
          Hey There,
          <br />
          <span>I'm Walid!</span>
        </h1>
        <div className="awards">
          <h2>Top Rated Designer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hSection right"></div>
    </div>
  )
}

export default Hero