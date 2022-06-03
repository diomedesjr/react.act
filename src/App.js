import React from 'react';
import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavLink } from 'react-bootstrap'
import Header from './components/Header'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'


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
      <Navbar.Brand onClick={event =>  window.location.href='/Header'}>
        <img onmouseover="bigImg(this)" src={logo} width="75rem" height="75rem" alt="logo"/>
        Diomedes
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav  className='ms-auto'>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  <Header />
  <Services />
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
  <About />
  <Contact />
  <Footer />
  </div>
  );
}

export default App;
