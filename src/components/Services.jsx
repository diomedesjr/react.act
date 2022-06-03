import React from 'react'

function Services() {
  return (
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
  )
}

export default Services