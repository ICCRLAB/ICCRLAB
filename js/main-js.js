window.onload = function (e) {
    $(document).ready(function () {
        $('.jumbotron').append(`

        <div class="row row-content">
          <div class="mb-0 text-center col-12 col-sm col-md">
            <span id="jumbo-images1">

           <i id="one"><img src="ICCRLAB.github.io/gallery/BSF1.jpeg" alt="PIET" width="250" height="250" hspace= "15" class="sponsor_image">    </i>

          <i id="two"><img src="gallery/AIP.jfif" alt="isparta" width="200" height="200" hspace= "10" class="img-fluid sponsor_image"></i>  <br><br>
      <!--    <i id="two"><img src="gallery/COER.jpg" alt="COER" width="200" height="200" hspace= "10" class="img-fluid sponsor_image"></i>-->
            </span>
          </div>

          <div class="col-12 col-sm col-md mb-0 text-center">

            <h1 style="font-size: x-large">1<sup>st</sup> INTERNATIONAL CONFERENCE ON INTELIGENT COMMUNICATION AND COMPUTATIONAL RESEARCH </h1>
            <h1 style="font-size: x-large">ICICCR-2021</h1>

            <h2 style="font-size:1.4rem";text-transform:uppercase">Organized by: Rustamji Institute of Technology Border Security Force Academy Tekanpur, Gwalior, India </h2>
             <h2 style="font-size:1.4rem">30<sup>th</sup> May 2021</h2>
           <!-- <h3 style="font-size:1.2rem;text-transform:uppercase"> In Association With </h3>

            <hr id="hrr">
            <h3 style="font-size:1.2rem;text-transform:uppercase"> Intelligent Communication and Computational Research Lab (ICCRLAB)</h3>-->
            <p id="demo" style="font-size:1.6rem"></p>
          </div>
          <div class="col-12 col-sm text-center">
           <i id="two"><img src="gallery/BSF2.jpeg" alt="isparta" width="200" height="200" hspace= "10" class="img-fluid sponsor_image"></i>  <br><br>
         <!--  <img src="gallery/Springer.png" alt="" width="200" height="200">-->
           <!-- <img src="gallery/Springer.png" alt="MSE" class="img-fluid sponsor_image">-->
          </div>
    <!--      <marquee> <h2 style="font-size:1.4rem">ICICCR-2021 moved from Physical Mode to Digital Mode due to Pandemic COVID 19.</h2></marquee>-->
        </div>

        `);

        $('.footer').append(`
        <div class="container">
                  <div class="row">
                      <div class="col-4 offset-1 col-sm-2">
                          <h5> <span class="fa fa-link"></span> Links</h5>
                          <ul class="list-unstyled">
                              <li><a href="index.html" style="font-size:1.0rem;">Home</a></li>
                              <li><a href="Registrations.html">Registrations</a></li>
                              <li><a href="spon_sorship.html">Sponsorship</a></li>
                              <li><a href="#">Accommodate</a></li>
                          </ul>
                      </div>
                      <div class="col-7 col-sm-5">
                          <h5> <span class="fa fa-map-marker"></span> Address</h5>
                          <address class="address">
                        <br>
                        <i class="fa fa-phone"> </i> &nbsp;: +<br>
                        <i class="fa fa-fax"> </i> : +<br>
                        <i class="fa fa-envelope"> </i> : <a href="mailto:iciccr.editor@gmail.com">iciccr.editor@gmail.com</a>
                     </address>
                      </div>
                      <div class="col-12 col-sm-4 align-self-center">
                          <div class="text-center">
                              <h5 class="text-center">Social Media</h5>
                              <hr style="border-top: 1px dashed #327FBF">
                              <a class="btn btn-social-icon btn-facebook" href="#"><i class="fa fa-facebook fa-lg"></i></a>
                              <a class="btn btn-social-icon btn-linkedin" href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                              <a class="btn btn-social-icon btn-twitter" href="#"><i class="fa fa-twitter fa-lg"></i></a>
                              <a class="btn btn-social-icon bg-light" href="mailto:icicc.editor@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
                          </div>
                      </div>
                 </div>
                 <div class="row justify-content-center">
                      <div class="col-auto">
                        <section class="sec Copyright">
                          <p class="footer_p_i_h2_a footer_p_i_a">Copyright © Intelligent Communication and Computational Research| All Rights Reserved | <a href="https://www.linkedin.com/in/sunnam-sai-jyothi-swaroop" target="_blank" style="color: teal;cursor: pointer;">Website Developed By S Sai Jyothi Swaroop</a> <a style="color: teal;cursor: pointer;" href="https://www.linkedin.com/in/manavarthi-venkat-rao?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bi%2B9dH7EqRVKLiciXidLBRg%3D%3D" target="_blank">and M Venkat Rao </a><a href="https://www.linkedin.com/in/karan-singh227" target="_blank" style="color: teal;cursor: pointer;">and Karan Singh</a>|</p>
                  </section>
                      </div>
                 </div>
              </div>
        `);


        $('.navbar').append(`
        <button type="button"class="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="collapse navbar-collapse" id="Navbar">
                      <ul class="nav navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link text-white" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="special-session.html">Call for Special Session</a>
                          </li>
                        <li class="nav-item dropdown dmenu">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                              About
                            </a>
                            <div class="dropdown-menu sm-menu text-white">
                              <a class="dropdown-item text-white" href="about_iccr_lab.html">About Institute</a>
                              <div class="dropdown-divider"></div>
                            <!--  <a class="dropdown-item text-white" href="about_institute.html">About Institute</a>-->
                            </div>
                          </li>
                          <li class="nav-item dropdown dmenu">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                              Papers
                            </a>
                            <div class="dropdown-menu sm-menu">
                              <a class="dropdown-item text-white" href="call_for_papers.html">Call For Papers</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item text-white" href="paper_submission.html">Paper Submission</a>
                            </div>
                          </li>

                          <li class="nav-item">
                            <a class="nav-link text-white" href="Registrations.html">Registrations</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link text-white" href="important_dates.html">Important Dates</a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="publications.html">Publications</a>
                          </li>
                        <li class="nav-item dropdown dmenu">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                          Committee
                        </a>
                      <div class="dropdown-menu sm-menu">
                        <!--  <a class="dropdown-item text-white" href="steering_committee.html">Steering Committee</a> -->
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item text-white" href="Advisory_and_technical_committee.html">Conference Core Committee</a>
                        </div>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link text-white " href="conference_venue.html">Conference Venue</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white" href="downloads.html">Downloads</a>
                      </li>
            <!--          <li class="nav-item">
                        <a class="nav-link text-white" href="Gallary.html">Gallery</a>
                      </li>-->

                   <!--   <li class="nav-item dropdown dmenu">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                              Previous Conferences
                            </a>
                            <div class="dropdown-menu sm-menu">
                              <a class="dropdown-item text-white" href="spon_sorship.html">ICICCR 2020</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item text-white" href="ICCRDA.html">ICCRDA 2020</a>
                            </div>
                          </li>--> 
                      
                      <li class="nav-item">
                        <a class="nav-link text-white" href="Conference Special Sessions.html">Special Sessions</a>
                      </li>

                    <!--  <li class="nav-item dropdown dmenu">
                      <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                        Special Sessions
                      </a>
                      <div class="dropdown-menu sm-menu">
                        <a class="dropdown-item text-white" href="session-1.html">Session 1</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-2.html">Session 2</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-3.html">Session 3</a>
                         <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-4.html">Session 4</a>
                          <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-5.html">Session 5</a>
                         <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-6.html">Session 6</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-7.html">Session 7</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-8.html">Session 8</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-9.html">Session 9</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-10.html">Session 10</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-11.html">Session 11</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-12.html">Session 12</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="session-13.html">Session 13</a>-->
                      </div>
                    </li>
                      </ul>
                    </div>
        `);
    });
  }
  // Set the date we're counting down to
var countDownDate = new Date("May 30, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "Days "+":" + hours + "Hours "+": "
  + minutes + "Min"+": " + seconds + "Sec";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
