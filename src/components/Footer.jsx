import React from 'react'

function Footer() {
  return (
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
  )
}

export default Footer