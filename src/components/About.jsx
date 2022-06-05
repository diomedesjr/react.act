import React, {useState} from 'react'

function About() {
  const [name, setName] = useState('Diomedes Jr. Hinay');
  const [college, setCollege] = useState('Bohol Island State University');
  const [elementary, setElementary] = useState('San Roque Elementary School');
  const [highschool, setHighschool] = useState('Infant King Academy');
  const [course, setCourse] = useState('Bachelor of Science in Information Technology')

  return (
    <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading text-uppercase">About</h1>
          <h3 className="section-subheading text-muted">I'm {name} a 3rd year student at {college} taking up {course}.</h3>
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
                  <p className="text-muted">{elementary}</p>
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
                  <p className="text-muted">{highschool}</p>
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
                  <p className="text-muted">{highschool}</p>
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
                  <p className="text-muted">{college}</p>
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