import React from "react";
import './style.css';

const Homepage = () => {
  return (
    <div className="wrapper">
      <header className="conatainer">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <a className="navbar-brand" href="#">
            <img src="images/code queen.png" alt="code-queen logo" className="logo-header" />
          </a>
          <a className="navbar-brand" href="#">Become the next code queen</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about-section">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="cohorts">COHORTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Applications">APPLY NOW</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Login">LOGIN</a>
                </li>
            </ul>
          </div>
        </nav>

        <div className="welcome-text container">
          <h1>CODE QUEEN BOOTCAMP</h1>
          <h4>Change your life, learn to <span className="orange-text">code</span></h4>
          <a href="Applications"  className="btn-main"> Apply here</a>
        </div>
        
      </header>

      <div className="container-fluid" id="about-section">
        <div className="section-text">
          <h2 className="section-title text-center">About Code Queen</h2>
          <div className="row">
            <div className="col-md-8 px-4">
              <p>We have partnered with The Innovation Village (a local start up hub) to bring a high quality course training young Ugandan women in coding, equipping them with the skills to find jobs in software development and STEM careers. 
                The course not only focuses on developing hard coding skills (in collaboration with local businesses), but also developing other attributes such as positive mind set and work readiness. It ends with a hackathon where students solve real
                time challenges for local businesses leading. Successful graduates are offered internships, scholarships and other linking opportunities through our ecosystem of partners. 
                Code Queen has successfully run 3 cohorts and graduated 70 students since the launch in 2019.    
              </p>
                <div className="row about-mini">
                  <div className="col-md-6 col-sm-6 cohort-picks">
                    <div className="cohort-picks-fa"> <i class="far fa-newspaper icon"></i></div>
                      <div>
                        <h7 className="orange-text">CAREER READINESS</h7>
                        <p>CV writing, interview techniques, Linkedin training, freelance workshop, cross cultural teams, remote working.</p>
                      </div>
                  </div>
                  <div className="col-md-6 col-sm-6 cohort-picks">
                    <div class="cohort-picks-fa"> <i class="far fa-lightbulb icon"></i> </div>
                      <div>
                        <h7 class="orange-text">MINDSET TRAINING</h7>
                        <p>Goal setting, habits for success, career planning, business planning, a 'learning to learn', mentality, pitching skills, creating a culture of 'giving back'.</p>
                      </div>
                  </div>
                  <div class="col-md-6 col-sm-6 cohort-picks">
                    <div class="cohort-picks-fa"> <i class="far fa-keyboard icon"></i> </div>
                      <div>
                        <h7 class="orange-text">INDUSTRY INPUT</h7>
                        <p>Mentorship, hackathons with industry real-life problems and speakers (selection of industry, further education and entrepreneurship).</p>
                      </div>
                  </div>
                  <div class="col-md-6 col-sm-6 cohort-picks">
                    <div class="cohort-picks-fa"> <i class="fas fa-laptop-code icon"></i> </div>
                      <div>
                        <h7 class="orange-text">CODING SKILLS</h7>
                        <p>HTML, CSS, JavaScript, Bootstrap, Node.js, database management, Express.js, MongoDB</p>
                      </div>
                  </div>
                </div>
            </div>
            <div className="col-md-4 px-4 cohorts-section">
              <h3>Cohorts</h3>
              <p>Code Queen is a 10 week coding bootcamp developed with industry; focused on delivering in-demand 21st century job skills.</p>    
              <iframe width="686" height="386" src="https://www.youtube.com/embed/1NCt4Q3PWiM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <a href="cohorts">See what our cohorts are like</a>
            </div>
          </div>
        </div>
        <div className="row vision-mission">
          <div class="col-md-4 m-2 px-4 feature">
            <div class="feature-icon"><i class="fa fa-paper-plane"></i></div>
            <div class="feature-content">
              <h4>Our Mission</h4>
              <p>With a Mission to empower girls and young women in East Africa through education and training, our boot camps are free of charge with no extra costs</p>
            </div>
          </div>
          <div class="col-md-3 m-2 px-4 feature">
            <div class="feature-icon"><i class="fa fa-low-vision"></i></div>
            <div class="feature-content">
              <h4>Our Vision</h4>
              <p>To increase capacity to be able to serve 1,000 women a year by 2025. Help us reach our heights. <a href="#">Donate now</a> </p>
            </div>
          </div>
          <div className="col-md-4 m-2 px-4 feature">
            <div class="feature-icon"><i class="fa fa-clock-o"></i></div>
              <div className="feature-content">
                <h4>Why Girls?</h4>
                <p>The likelihood of exclusion from education is most problematic among young women in sub-Saharan Africa, where 49.8 per cent of the female youth population had either no or limited education</p>
              </div>
          </div>
        </div>
      </div>

      <div className="bonus-section">
        <div class="bonus-text container">
          <h2>Become the next Code Queen at <span class="orange-text">zero cost</span> </h2>       
        </div>
      </div>

      <div className="partners-section container">
        <h2 class="section-title text-center">We work with</h2>
        <div class="row container logos-div">
          <div class="col-md-6 col-sm-6"><img class="logos" src="./images/innovation.png" /></div>
          <div class="col-md-6 col-sm-6"><img class="logos" src="./images/refactory.png" /></div>
          <div class="col-md-6 col-sm-6"><img class="logos" src="./images/safeboda.png" /></div>
          <div class="col-md-6 col-sm-6"><img class="logos" src="./images/fenix.png" /></div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 container">
              <div className="footer-logo"> <img src="./images/side-logo.png" alt="" className="logo-ft" /></div>
              <address className="footer-list"><i className="fa fa-map-marker location"></i>
                Plot 31 Ntinda - Kisaasi Road
                  Ntinda Shopping Complex 
                  Block B&C 3rd Floor
              </address>
              <ul className="footer-list contact">
                <li><i className="fa fa-phone"></i> 0393241297</li>
                <li><i className="fa fa-envelope-o"></i> team@etc.education</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="footer-title">Information</h3>
              <ul className="footer-links">
                <li><i className="fas fa-angle-right"></i> <a href="#">Testimonials</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="https://twitter.com/etceducation" target="_blank">Twitter</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="https://www.facebook.com/etceducation/?ref=br_rs" target="_blank">Facebook</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="https://www.linkedin.com/groups/9012051/" target="_blank">LinkedIn</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="#">Donate</a></li>
              </ul>
            </div>

            <div className="col-md-2">
              <h3 className="footer-title">Pages</h3>
              <ul className="footer-links">
                <li><i className="fas fa-angle-right"></i> <a href="Homepage" title="Home">Home</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="Applications" target="_blank" title="Services">Application</a></li>
                <li><i className="fas fa-angle-right"></i> <a href="https://www.etc.education/" title="Contact Us" target="_blank">Educating the children</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h3 className="footer-title">Newsletter</h3>
              <p>Subscribe to our newsletter to get the latest
                updates to your inbox.</p>

              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Email Address" />
                  <span className="input-group-btn">
                    <button className="btn btn-ft" type="button">subscribe</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
                                
  );
};

export default Homepage;
