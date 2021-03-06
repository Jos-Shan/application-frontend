import React from 'react'
import './style.css';

const Cohorts = () => {
    return (
        <div class="wrapper">
            <header class="conatainer">
        
        <nav class="navbar navbar-expand-md navbar-dark fixed-top container-fluid">
            <a class="navbar-brand" href="#">
                <img src="images/code queen.png" alt="code-queen logo" class="logo-header"/>
            </a>
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="homepage">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cohorts">COHORTS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form" target="_blank">APPLY NOW</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login">LOGIN</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="welcome-text container">
            <h1>COHORTS</h1>
        </div>
       
    </header>
    

    <div class="cohort-intro-div container">
        <h2 class="section-title text-center">Who are Code Queens?</h2>
        <p class="cohort-paragraph">Our cohorts consist of aspiring developers, IX designers, project managers and so much more. 
            Our previous cohorts have resulted in graduates going on to work internationally for Tata and locally at Trustful Trade, Kanzu Code and Laboremus. 
            We run a total of three cohorts per year. 
            <div class="row">
                <div class="col-md-6">
                    <ul class="cohort-dates">
                        <li><i class="far fa-calendar-check"></i> March to May</li>
                        <li><i class="far fa-calendar-check"></i> June to August</li>
                        <li><i class="far fa-calendar-check"></i> September to November</li>
                    </ul>
                </div>
                <div class=" col-md-6">
                    <ul class="cohort-hours">
                        <li><i class="fa fa-clock-o"></i> 70 Hours of online lessons</li>
                        <li><i class="fa fa-clock-o"></i> 75 Hours of mentoring</li>
                        <li><i class="fa fa-clock-o"></i> 205 Hours of self-study</li>
                    </ul>
                </div>
            </div>
            
        </p>
        
    </div>
    

    <div class="container-fluid impact-div">
       <h2 class="section-title text-center">The Impact</h2>
       <div class="row">
           <div class="col-md-6 ">
                <h4>We linked 80% of our first cohort to jobs, internships and scholarships. Previous students have also come back to facilitate new cohorts.</h4>
                <p> 
                    We have finished running our current cohort through COVID-19. Normally students come to the Innovation Village to participate but this became impossible
                    after lock down. We thought we would have to shut the program down due to lack of infrastructure many of these young women face; they can???t afford laptops & data.
                    Despite the challenges, 50% of them managed to show up online every day through agility, resilience, resourcefulness and commitment. They learnt new skills and 
                    completed a hackathon challenge set by Safe Boda (our previous partners include Prudential Uganda and Fenix International). We are now working on linking successful 
                    graduates to opportunities that include internships, jobs and scholarships. And once lock down ends, we look forward to reserving those that are just not able to make it online.
                </p> 
            </div>    
            <div class="col-md-5">
                <iframe width="686" height="386" src="https://www.youtube.com/embed/nhcM14Rx3qs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>
    </div>


    <div class="container">

        <h2 class="section-title text-center">Success Stories</h2>
        <div class="row container single-event-page my-5">
            <div class="col-md-4 thumb-div">
                <img class="thumb-img" src="./images/sandra.png" alt="code queen alumni picture"/>
            </div>
            <div class="col-md-3 taiming">
                <p><span><i class="fa fa-calendar"></i> 28 JULY 2019 </span> <span><i class="fa fa-clock-o"></i> COHORT 1 </span></p>
                <p><span class="loc" ><i class="fa fa-map-marker"></i></span> Plot 31 Ntinda - Kisaasi Road, Ntinda Shopping Complex Block B&C 3rd Floor</p>
            </div>
            <div class="col-md-4 single-event-info">
                <h3>Sandra Nanteza</h3>
                <p>With a background in micro financing small businesses, Sandra Nanteza speaks with us about how she is using the skills she
                learnt through the Code Queen program and why it was important to her to be a facilitator.</p>
                <a href="#" class="read-more-btn">Play Audio</a>
            </div>
        </div>
        <div class="row container single-event-page my-5">
            <div class="col-md-4 thumb-div">
                <img class="thumb-img" src="./images/eva.png" alt="code queen alumni picture"/>
            </div>
            <div class="col-md-3 taiming">
                <p><span><i class="fa fa-calendar"></i> 28 JULY 2019 </span> <span><i class="fa fa-clock-o"></i> COHORT 1 </span></p>
                <p><span class="loc" ><i class="fa fa-map-marker"></i></span> Plot 31 Ntinda - Kisaasi Road, Ntinda Shopping Complex  Block B&C 3rd Floor</p>
            </div>
            <div class="col-md-4 single-event-info">
                <h3>Eva Mirembe</h3>
                <p>Eva Mirembe talks to us about what inspired her to pursue a career in programming through the Code Queen initiative</p>
                <a href="#" class="read-more-btn">Play Audio</a>
            </div>
        </div>
        <div class="row container single-event-page my-5">
            <div class="col-md-4 thumb-div">
                <img class="thumb-img" src="./images/background.jpg" alt="code queen alumni picture"/>
            </div>
            <div class="col-md-3 taiming">
                <p><span><i class="fa fa-calendar"></i> 28 JULY 2019</span> <span><i class="fa fa-clock-o"></i> COHORT 1 </span></p>
                <p><span class="loc" ><i class="fa fa-map-marker"></i></span> Plot 31 Ntinda - Kisaasi Road, Ntinda Shopping Complex Block B&C 3rd Floor</p>
            </div>
            <div class="col-md-4 single-event-info">
                <h3>Eva Mirembe</h3>
                <p>Eva Mirembe talks to us about what inspired her to pursue a career in programming through the Code Queen initiative</p>
                <a href="#" class="read-more-btn">Play Audio</a>
            </div>
        </div>

    </div>
    

    <div class="bonus-section">
        <div class="bonus-text container">
            <h2>Become a software developer at <span class="orange-text">zero cost</span> 
                <a href="form" target="_blank" class="btn-main">Apply Here</a>
            </h2>
        </div>
    </div>


    <div class="container-fluid gallery">
        <h2 class="section-title text-center">Gallery</h2>
        <div id="gallery-section" class="row">
            <div class="col-md-4">
                <img src="./images/pic9.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic1.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic2.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic3.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic4.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic5.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic6.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic7.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic8.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic10.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/pic12.jpg" class="picss" alt=""/>
            </div>
            <div class="col-md-4">
                <img src="./images/background.jpg" class="picss" alt=""/>
            </div>

        </div>
    </div>
    
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-3 container">
                    <div class="footer-logo mb30"> <img src="../images/side-logo.png" alt="" class="logo-ft"/></div>
                    <address class="footer-list"><i class="fa fa-map-marker location"></i> 
                        Plot 31 Ntinda - Kisaasi Road
                            Ntinda Shopping Complex 
                            Block B&C 3rd Floor
                    </address>
                    <ul class="footer-list contact">
                        <li><i class="fa fa-phone"></i> 0393241297</li>
                        <li><i class="fa fa-envelope-o"></i> team@etc.education</li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h3 class="footer-title">Information</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-angle-right"></i> <a href="#">Testimonials</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="https://twitter.com/etceducation" target="_blank">Twitter</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="https://www.facebook.com/etceducation/?ref=br_rs" target="_blank">Facebook</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="https://www.linkedin.com/groups/9012051/" target="_blank">LinkedIn</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="#">Donate</a></li>
                    </ul>
                </div>

                <div class="col-md-2">
                    <h3 class="footer-title">Pages</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-angle-right"></i> <a href="homepage" title="Home">Home</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="form" target="_blank" title="Services">Application</a></li>
                        <li><i class="fas fa-angle-right"></i> <a href="https://www.etc.education/" title="Contact Us" target="_blank">Educating the children</a></li>
                    </ul>
                </div>

                <div class="col-md-4">
                    <h3 class="footer-title">Newsletter</h3>
                    <p>Subscribe to our newsletter to get the latest 
                        updates to your inbox.</p>

                        <form>
                            <div class="input-group">
                            <input type="email" class="form-control" placeholder="Email Address"/>
                            <span class="input-group-btn">
                            <button class="btn btn-ft" type="button">subscribe</button>
                            </span>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Cohorts
