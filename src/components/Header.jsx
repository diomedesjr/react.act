import React, { useState } from 'react'

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Hello, I'm Diomedes</div>
        <div className="intro-sub-heading">I help designers, small agencies and businesses bring their ideas to life. Powered <br />by Figma, VS Code and coffee, I turn your requirements into CMS-ified and <br />ecommerce-ified websites - on time and on budget.</div>
        <div className="intro-sub-heading">Got any questions?</div>
        <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="btn-outline-primary btn-lg js-scroll-trigger" onClick={event =>  window.location.href='#contact'}>
        Contact me
      </button>
      </div>
    </div>
  </header>
  )
}

export default Header