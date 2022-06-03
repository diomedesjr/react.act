import React from 'react'

function About() {
  return (
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
  )
}

export default About