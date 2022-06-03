import React from 'react';
import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import { Nav, Navbar, NavLink } from 'react-bootstrap'
import Header from './components/Header'
import Contact from './components/Contact'


function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    }
  ]

  return (
    <div className="App">
      <Navbar bg = "dark" variant = "dark" sticky="top" expand= "sm" collapseOnSelect>
    <div className="container1">
      <Navbar.Brand onClick={event =>  window.location.href='/Header'}>
        <img onmouseover="bigImg(this)" src={logo} width="75rem" height="75rem" alt="logo"/>
        Diomedes
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
            <NavLink href="#services" js-scroll-trigger>Services</NavLink>
            <NavLink href="#portfolio" js-scroll-trigger>Portfolio</NavLink>
            <NavLink href="#about" js-scroll-trigger>About</NavLink>
            <NavLink href="#contact" js-scroll-trigger>Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>

  <Header />

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Here's What I Can Do</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i class="fa fa-paint-brush fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Design</h4>
          <p className="text-muted">Design and edit photos and videos just for you</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Develop</h4>
          <p className="text-muted">Develop responsive website to fit your need</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Brand Identity</h4>
          <p className="text-muted">Help you create your unique brand identity</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading text-uppercase">About</h1>
          <h3 className="section-subheading text-muted">I'm Diomedes Jr. Hinay a 3rd year student at Bohol Island State University taking up Bachelor of Science in Information Technology.</h3>
          <h2 className="section-heading text-uppercase">Education</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12"> 
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2006-2012</h4>
                  <h4 className="subheading">Elementary</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">San Roque Elementary School</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2012-2016</h4>
                  <h4 className="subheading">Junior High School</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Infant King Academy</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2016-2018</h4>
                  <h4 className="subheading">Senior High School</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Infant King Academy</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2019-Present</h4>
                  <h4 className="subheading">College</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Bohol Island State University</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of My
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <Contact />
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; DiomedesJr 2022</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a onClick={event =>  window.location.href='https://www.instagram.com/deejay_1099/'}>
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a onClick={event =>  window.location.href='https://www.facebook.com/deejay1099/'}>
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a onClick={event =>  window.location.href='https://github.com/diomedesjr'}>
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
