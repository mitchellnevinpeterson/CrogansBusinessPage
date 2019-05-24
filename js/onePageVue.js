// If console throws an error then load the other home.html file for older browsers
window.onerror = function(error) {
  var redirect = window.location.href = "home.html"
}
 // ---------------------------------------
// Vue router for one page application
// ---------------------------------------
const home = {
  template:`
    <ul class="cb-slideshow">
        <li><span class="slideshow-img">Image 01</span><div><h1 class="text-uppercase text-shadow-blk jose-bold">Irish American Dining</h1></div></li>
        <li><span class="slideshow-img">Image 02</span><div><h1 class="text-uppercase light-grey-bckgrd jose-bold">Home away from home</h1></div></li>
        <li><span class="slideshow-img">Image 03</span><div><h1 class="text-uppercase text-shadow-blk jose-bold">Traditional Drinks</h1></div></li>
        <li><span class="slideshow-img">Image 04</span><div><h1 class="text-uppercase text-shadow-blk jose-bold">Full Bar, Beer, and Wine</h1></div></li>
        <li><span class="slideshow-img">Image 05</span><div><h1 class="text-uppercase text-shadow-blk jose-bold">Great service, Feel at Home Ambience</h1></div></li>
        <li><span class="slideshow-img">Image 06</span><div><h1 class="text-uppercase text-shadow-blk jose-bold">Food is fresh and made to order</h1></div></li>
    </ul>    
  `
}
const menu = {
  template:`
    <div class="menuDivWrap text-center container">
      <ul onclick="menuSwap(event)" id="foodMenu" class="animated menu-nav">
        <li><a class="menu font-white text-shadow-blk" value="startersMenu">Starters/Soups</a></li>
        <li><a class="menu font-white text-shadow-blk" value="entreeMenu">Entr&#233es</a></li>
        <li><a class="menu font-white text-shadow-blk" value="sandwichMenu">Sandwiches/Pasta/Salad</a></li>
        <li><a class="menu font-white text-shadow-blk" value="dessertMenu">Dessert</a></li>
        <li><a class="menu font-white text-shadow-blk" value="brunchMenu">Weekend Brunch</a></li>
        <li><a class="menu font-white text-shadow-blk" value="happyHourMenu">Happy Hour!</a></li>
      </ul>
      <p class="mt-2 p-tag">*Click on menu image to zoom in*</p>
      <img id="menuImage" onclick="zoom()" class="menus" src="img/startersMenu.jpg" alt="Crogan's Menu">
      <!-- The Modal to Zoom Menu Imgs -->
      <div id="myModal" class="modal">
        <!-- The Close Button -->
        <span onclick="closeZoom()" class="close">&times;</span>
        <!-- The menu nav -->
        <ul onclick="menuSwapZoom(event)" id="foodMenuZoom" class="animated menu-nav">
          <li><a class="menu-zoom font-white text-shadow-blk" value="startersMenu">Starters/Soups</a></li>
          <li><a class="menu-zoom font-white text-shadow-blk" value="entreeMenu">Entr&#233es</a></li>
          <li><a class="menu-zoom font-white text-shadow-blk" value="sandwichMenu">Sandwiches/Pasta/Salad</a></li>
          <li><a class="menu-zoom font-white text-shadow-blk" value="dessertMenu">Dessert</a></li>
          <li><a class="menu-zoom font-white text-shadow-blk" value="brunchMenu">Weekend Brunch</a></li>
          <li><a class="menu-zoom font-white text-shadow-blk" value="happyHourMenu">Happy Hour!</a></li>
        </ul>
        <!-- Modal Content (The Image) -->
        <img class="modal-content" id="img01">
      </div>
      <!-- Heading for make a reservation -->
      <div id="menuReservation" class="container">
        <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h1 id="heading" class="font-weight-bold font-white">Make a reservation!</h1></a>
        <!-- Description of Delivery/Reservations -->
        <div class="text-center">
          <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h2 class="font-weight-bold mt-4">To make a reservation online go to Chowtime!</h2></a>
          <h4 id="lrgParties" class="mx-auto">To make a reservation for more than 20 people or to reserve our private backroom, please call the restaurant directly at:</h4>
          <h4 class="font-weight-bold mb-3"><a href="tel:15103392098"><i class="fas fa-phone"></i>(510)339-2098</a></h4>
          <div class="row mt-2">
            <div class="col-4-sm mx-auto">
              <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us">
                <img class="col-img cover-img chow-logo" alt="Chowtime Logo" src="img/chowTime.png">
              </a>
              <p class="mt-2">*Reservations are for dining room only!*</p>
              <p class="mb-3">Cocktail area is open seating</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Links -->
      <h1 id="heading" class="font-weight-bold font-white mt-5">Order delivery through our delivery platforms!</h1>
      <div id="links" class="row mx-auto">
        <!-- Uber Eats Delivery -->
        <div class="col-md-4">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.ubereats.com/san-francisco/food-delivery/crogans/TR7gAqtSS7Kcta58Q2O03w/">
              <img class="col-img logo-img" src="img/uberEats.png" alt="Link to Uber Eats delivery Crogan's">
            <h5>Order delivery on Uber Eats!</h5>
            </a>
          </div>
        </div>
        <!-- Amazon Delivery -->
        <div class="col-md-4">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.amazon.com/restaurants/crogan%27s-montclair-oakland/d/B01M03ROZM">
              <img class="col-img logo-img" src="img/amazon.jpg" alt="Link to Amazon delivery Crogan's">
            <h5>Order delivery on Amazon!</h5>
            </a>
          </div>
        </div>
        <!-- Doordash Delivery -->
        <div class="col-md-4">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.doordash.com/store/crogans-montclair-restaurant-oakland-46272/?utm_campaign=46272&utm_medium=website&utm_source=partner-link">
              <img class="col-img logo-img" src="img/doordash.png" alt="Link to Doordash delivery Crogan's">
            <h5>Order delivery on Doordash!</h5>
            </a>
          </div>
        </div>
      </div>
  `
}
const about = {
  template:`
    <div id="aboutDivWrap" class="container text-center mx-auto">
      <!-- About Page Heading -->
      <div>
        <h1 id="heading" class="font-weight-bold font-white">The "Cheers" of Montclair in Oakland!</h1>
      </div>
      <!-- Description of Crogan's -->
      <div>
        <p class="p-tag-about">Good times in the heart of Montclair! When you're in the mood for good times and great food, be sure to visit our restaurant. We're located in one of the most pleasant Village settings and are known for our delightful staff and excellent dining.</p>
      </div>
      <!-- Top Pictures in About Section -->
      <div id="picsAbout" class="row text-center mb-5">
        <!-- Picture of Joe at the bar of Crogan's -->
        <div class="col-md-4 col-8 mt-3 mx-auto">
          <div class="img-div">
              <img class="col-img cover-img" src="img/joeBar.jpg" alt="Joe the bartender at Crogan's Montclair">
          </div>
        </div>
        <!-- Window front at Crogans -->
        <div class="col-md-5 col-10 mt-3 mx-auto">
          <div class="img-div">
              <img class="col-img cover-img" src="img/croganWindows.jpg" alt="Outside front view of Crogan's Montclair">
          </div>
        </div>
        <!-- Jameson bottle at Crogan's -->
        <div class="col-md-3 col-7 mt-3 mx-auto">
          <div class="img-div">
              <img class="col-img cover-img" src="img/jamoBottle.jpg" alt="A bottle of Jameson at Crogan's">
          </div>
        </div>
      </div>
      <!-- Heading for the sports -->
      <div>
        <h1 id="heading" class="font-weight-bold font-white">Catch the latest action in the bar!</h1>
      </div>
      <!-- Description Sports Bar -->
      <div>
        <p class="p-tag-about">Watch all the sports action here! NFL Sunday Ticket, NBA, MLB, Hockey, NASCAR, we got it all going on here! Join us for all the latest sports action.</p>
      </div>
      <!-- Sports showing in the bar area -->
      <div class="row">
        <!-- SF Giants -->
        <div class="col-6 col-md-3 mt-3">
          <img alt="Logo of the SF Gaints" class="col-img cover-img" src="img/sfGaints.png">
        </div>
        <!-- Oakland Raiders -->
        <div class="col-6 col-md-3 mt-3">
          <img alt="Logo of the Oakland Raiders" class="col-img cover-img" src="img/raiders.jpg">
        </div>
        <!-- SF 49er's -->
        <div class="col-6 col-md-3 mt-3">
          <img alt="Logo of the SF 49er's" class="col-img cover-img" src="img/49er.jpg">
        </div>
        <!-- SJ Sharks -->
        <div class="col-6 col-md-3 mt-3">
          <img alt="Logo of the SJ Sharks" class="col-img cover-img" src="img/sjSharks.png">
        </div>
        <!-- Oakland Athletics -->
        <div class="col-6 col-md-4 mt-3">
          <img alt="Logo of the Oakland Athletics" class="col-img cover-img" src="img/athletics.jpg">
        </div>
        <!-- Oakland Warriors -->
        <div class="col-6 col-md-4 mt-3">
          <img alt="Logo of the NBA Warriors" class="col-img cover-img" src="img/warriors.jpg">
        </div>
        <!-- NFL Ticket -->
        <div class="col-8 col-md-4 mt-3 mb-5 mx-auto">
          <img alt="Logo of the NFL Ticket" class="col-img cover-img" src="img/nflTicket.png">
        </div>
      </div>
      <!-- Heading for the poem that inspired the name of Crogan's -->
      <div>
        <h1 id="heading" class="font-weight-bold font-white">The poem that inspired the name of Crogan's</h1>
      </div>
      <!-- The picture of the poem of the Crogan name -->
      <div class="row">
        <div class="col-12 mx-auto">
          <img class="col-img cover-img" alt="Poem of Party at Crogans" src="img/poem.jpg">
        </div>
      </div>
      <!-- Grid of Links -->
      <h1 id="heading" class="font-weight-bold font-white mt-5">Order delivery through our delivery platforms!</h1>
      <div id="links" class="row mx-auto">
        <!-- Uber Eats Delivery -->
        <div class="col-6 col-md-4">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.ubereats.com/san-francisco/food-delivery/crogans/TR7gAqtSS7Kcta58Q2O03w/">
              <img class="col-img logo-img" src="img/uberEats.png" alt="Link to Uber Eats delivery Crogan's">
            <h5 class="mt-3">Order delivery on Uber Eats!</h5>
            </a>
          </div>
        </div>
        <!-- Amazon Delivery -->
        <div class="col-6 col-md-4">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.amazon.com/restaurants/crogan%27s-montclair-oakland/d/B01M03ROZM">
              <img class="col-img logo-img" src="img/amazon.jpg" alt="Link to Amazon delivery Crogan's">
            <h5 class="mt-3">Order delivery on Amazon!</h5>
            </a>
          </div>
        </div>
        <!-- Doordash Delivery -->
        <div class="col-6 col-md-4">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.doordash.com/store/crogans-montclair-restaurant-oakland-46272/?utm_campaign=46272&utm_medium=website&utm_source=partner-link">
              <img class="col-img logo-img" src="img/doordash.png" alt="Link to Doordash delivery Crogan's">
            <h5 class="mt-3">Order delivery on Doordash!</h5>
            </a>
          </div>
        </div>
      <!-- Check Please link -->
        <div class="col-6 col-md-4 border-top-1">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.kqed.org/checkplease/1345/crogans-montclair-reviews">
              <img class="col-img logo-img" src="img/checkPlease.png" alt="Link to Check Please Crogan's">
            <h5>Check us out on Check Please!</h5>
            </a>
          </div>
        </div>
        <!-- Oakland Magazine link -->
        <div class="col-6 col-md-4 border-top-1">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="http://www.oaklandmagazine.com/Oakland-Magazine/July-August-2010/Best-of-Oakland/">
              <img class="col-img logo-img" src="img/oaklandMag.gif" alt="Link to Oakland Magazine">
            <h5>Voted Best Buffalo Wings!</h5>
            </a>
          </div>
        </div>
        <!-- Facebook Link -->
        <div class="col-6 col-md-4 border-top-1">
          <div class="logo-div logo-div-height">
            <a target="_blank" href="https://www.facebook.com/crogansmontclair">
              <img class="col-img logo-img" src="img/facebook.png" alt="Link to Facebook Crogan's">
            <h5>Follow us on Facebook!</h5>
            </a>
          </div>
        </div>
      </div>
      <!-- Heading for make a reservation -->
      <div>
        <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h1 id="heading" class="font-weight-bold font-white">Make a reservation!</h1></a>
        <!-- Description of Delivery/Reservations -->
        <div class="text-center">
          <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h2 class="font-weight-bold mt-4">To make a reservation online go to Chowtime!</h2></a>
          <h4 id="lrgParties" class="mx-auto">To make a reservation for more than 20 people or to reserve our private backroom, please call the restaurant directly at:</h4>
          <h4 class="font-weight-bold mb-3"><a href="tel:15103392098"><i class="fas fa-phone"></i>(510)339-2098</a></h4>
          <div class="row mt-2">
            <div class="col-4-sm mx-auto">
              <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us">
                <img class="col-img cover-img chow-logo" alt="Chowtime Logo" src="img/chowTime.png">
              </a>
              <p class="mt-2">*Reservations are for dining room only!*</p>
              <p class="mb-3">Cocktail area is open seating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
const reservations = {
  template:`
        <!-- Reservation section -->
        <div id="reservations-wrap" class="container text-center mx-auto">
            <!-- Description of Crogan's -->
          <div class="text-center">
            <h1 id="heading" class="font-weight-bold font-white">Assure you have a spot to dine with us!</h1>
            <h2 class="font-weight-bold">Join us for Happy Hour!</h2>
            <h4 class="font-weight-bold"><u>Monday through Friday 4:00pm to 6:00pm</u></h4>
            <div class="happy-hour-discription">
              <h4>Select any of our appetizers for a $3 discount</h4>
              <h4>-and-</h4>
              <h4>Grab a Draft Beer or House Wine for only $4</h4>
              <h4>Take a shot of one of our well liquors starting at only $5</h4>
              <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h2 class="font-weight-bold mt-5">To make a reservation online go to Chowtime!</h2></a>
              <h4 id="lrgParties" class="mx-auto">To make a reservation for more than 20 people or to reserve our private backroom, please call the restaurant directly at:</h4>
              <h4 class="font-weight-bold mb-3"><a href="tel:15103392098"><i class="fas fa-phone"></i>(510)339-2098</a></h4>
              <p>*Reservations are for dining room only!*</p>
              <p>Cocktail area is open seating</p>
              <div class="row mt-2">
                <div class="col-4-sm mx-auto">
                  <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us">
                    <img class="col-img cover-img chow-logo" alt="Chowtime Logo" src="img/chowTime.png">
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h1 id="heading" class="font-weight-bold font-white">Why should you dine with us?</h1>
              <p class="p-tag-reservations mb-5">Crogan's is often called the place where everyone knows your name. And why not? After all our guests are our Family! Join us for a drink, sit back and have a toast to whatever day it happens to be! If you happen to be a sports fan, don't forget to bring your game face, because we play hard!</p>
            </div>
          </div>
            <!-- Top Pictures in Reservation Section -->
            <div id="picsAbout" class="row text-center">
              <!-- Picture of irish coffee -->
              <div class="col-8 col-md-3 mt-3 mx-auto">
                <div class="img-div">
                    <img class="col-img cover-img" src="img/irishCoffee02.jpg" alt="Irish coffee at Crogan's Montclair">
                </div>
              </div>
              <!-- Dining room at Crogans -->
              <div class=" col-12 col-md-6 mt-3 mx-auto">
                <div class="img-div">
                    <img class="col-img cover-img" src="img/dining.jpg" alt="dining room view of Crogan's Montclair">
                </div>
              </div>
              <!-- Tullamore Dew bottle at Crogan's -->
              <div class="col-8 col-md-3 mt-3 mx-auto">
                <div class="img-div">
                    <img class="col-img cover-img" src="img/tullamore.jpg" alt="A bottle of Tullamore Dew at Crogan's">
                </div>
              </div>
            </div>
          <!-- Links -->
          <h1 id="heading" class="font-weight-bold font-white mt-5">Order delivery through our delivery platforms!</h1>
            <div id="links" class="row mx-auto">
              <!-- Uber Eats Delivery -->
              <div class="col-6 col-md-3">
                <div class="logo-div">
                  <a target="_blank" href="https://www.ubereats.com/san-francisco/food-delivery/crogans/TR7gAqtSS7Kcta58Q2O03w/">
                    <img class="col-img logo-img" src="img/uberEats.png" alt="Link to Uber Eats delivery Crogan's">
                  <h5>Order delivery on Uber Eats!</h5>
                  </a>
                </div>
              </div>
              <!-- Amazon Delivery -->
              <div class="col-6 col-md-3">
                <div class="logo-div">
                  <a target="_blank" href="https://www.amazon.com/restaurants/crogan%27s-montclair-oakland/d/B01M03ROZM">
                    <img class="col-img logo-img" src="img/amazon.jpg" alt="Link to Amazon delivery Crogan's">
                  <h5>Order delivery on Amazon!</h5>
                  </a>
                </div>
              </div>
              <!-- Doordash Delivery -->
              <div class="col-6 col-md-3">
                <div class="logo-div">
                  <a target="_blank" href="https://www.doordash.com/store/crogans-montclair-restaurant-oakland-46272/?utm_campaign=46272&utm_medium=website&utm_source=partner-link">
                    <img class="col-img logo-img" src="img/doordash.png" alt="Link to Doordash delivery Crogan's">
                  <h5>Order delivery on Doordash!</h5>
                  </a>
                </div>
              </div>
              <!-- Facebook Link -->
              <div class="col-6 col-md-3">
                <div class="logo-div">
                  <a target="_blank" href="https://www.facebook.com/crogansmontclair">
                    <img class="col-img logo-img" src="img/facebook.png" alt="Link to Facebook Crogan's">
                  <h5>Follow us on Facebook!</h5>
                  </a>
                </div>
              </div>
            </div>
        </div>
  `
}
const contact = {
  template:`
        <!-- Contact Section -->  
        <div id="contactDivWrap" class="container text-center mx-auto">
          <!-- Contact Heading -->
          <div>
            <h1 id="heading" class="font-weight-bold font-white">Come on down to Crogan's Montclair!</h1>
          </div>
          <!-- Pictures Contact Section -->
          <div id="picsAbout" class="row text-center">
            <!-- Picture of Crogan's -->
            <div class="col-md-12">
              <div class="img-div">
                  <img class="col-img cover-img" src="img/crogansFront02.jpg" alt="Crogan's Montclair">
              </div>
            </div>
          </div>
          <p class="p-tag-contact mt-3 mb-4">Crogan's is a place that is warm and welcoming for everyone, but for most people it is a place where "everyone knows my name."</p>
          <!-- Heading -->
          <div>
          <h1 id="heading" class="font-weight-bold font-white">Contact Us / Get Directions</h1>
          <!-- Description of Crogan's -->
            <p class="p-tag-about"><em>We are located at the heart of Monclair Village Oakland!</em></p>
          </div>
          <div class="container">
            <div class="row text-center">
              <div id="contactInfo" class="col-6 col-md-4 mx-auto">
                <h4 class="font-weight-bold mb-4 mt-4"><i class="fas fa-user"></i> Owner: Mike Williams</h4>
                <h4 class="font-weight-bold mb-3"><a href="tel:15103392098"><i class="fas fa-phone"></i> Phone: (510)339-2098</a></h4>
                <h4 class="font-weight-bold mb-3"><a href="mailto:mike@crogans.com"><i class="fas fa-envelope"></i> Email: mike@crogans.com</a></h4>
                <h4 class="font-weight-bold mb-4"><i class="fas fa-fax"></i> Fax: (510)339-2077</h4>
                <h4 class="font-weight-bold mb-1"><a href="https://goo.gl/maps/e9wrRZYKHwL2" target="_blank"><i class="fas fa-thumbtack"></i> Location: 6101 LaSalle Avenue, Oakland, CA 94611</a></h4>
                <h4 class="font-weight-bold mb-4"> - Monclair Village - </h4>
                <p class="font-weight-bold"> - Dining Room Hours - </p>
                <p>Mon. - Sat. 11:30am to 10:00pm</p>
                <p>Sunday 11:30am to 9:30pm</p>
                <p class="font-weight-bold"> - We're Closed On - </p>
                <p> - Christmas Day - </p>
                <p> - Thanksgiving - </p>
                <p> - 4th of July - </p>
              </div>
              <div class="col-12 col-md-8 mx-auto">
                <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4438253340227!2d-122.2126144846808!3d37.82649437975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f879acc7e8fd1%3A0x2eea13e66195113!2s6101+La+Salle+Ave%2C+Oakland%2C+CA+94611!5e0!3m2!1sen!2sus!4v1527486748365" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
            <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h1 id="heading" class="font-weight-bold font-white">Make a reservation!</h1></a>
            <!-- Description of Delivery/Reservations -->
            <div class="text-center">
              <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h2 class="font-weight-bold mt-4">To make a reservation online go to Chowtime!</h2></a>
              <h4 id="lrgParties" class="mx-auto">To make a reservation for more than 20 people or to reserve our backroom, please call the restaurant directly at:</h4>
              <h4 class="font-weight-bold mb-3"><a href="tel:15103392098"><i class="fas fa-phone"></i>(510)339-2098</a></h4>
              <div class="row mt-2">
                <div class="col-4-sm mx-auto">
                  <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us">
                    <img class="col-img cover-img chow-logo" alt="Chowtime Logo" src="img/chowTime.png">
                  </a>
                  <p class="mt-2">*Reservations are for dining room only!*</p>
                  <p class="mb-3">Cocktail area is open seating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  `
}
const delivery = {
  template:`
        <!-- Delivery section -->
        <div id="delivery-wrap" class="container text-center mx-auto">
            <!-- Heading of the delivery page -->
            <h1 id="heading" class="font-weight-bold font-white">Want to stay at home?<br/>Order delivery!</h1>
            <!-- Carousel images of food -->
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="img/braisedRib.jpg" alt="Braised Short Rib">
                  <h3 class="carousel-caption d-none d-md-block">Braised Short Rib</h3>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/fishNchips.jpg" alt="Fish and Chips">
                  <h3 class="carousel-caption d-none d-md-block">Fish and Chips</h3>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/caesar.jpg" alt="Caesar Salad">
                  <h3 class="carousel-caption d-none d-md-block">Caesar Salad</h3>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <!-- Links -->
            <h1 id="heading" class="font-weight-bold font-white mt-5">Order delivery through our delivery platforms!</h1>
            <div id="links" class="row mx-auto">
              <!-- Uber Eats Delivery -->
              <div class="col-md-4">
                <div class="logo-div logo-div-height">
                  <a target="_blank" href="https://www.ubereats.com/san-francisco/food-delivery/crogans/TR7gAqtSS7Kcta58Q2O03w/">
                    <img class="col-img logo-img" src="img/uberEats.png" alt="Link to Uber Eats delivery Crogan's">
                  <h5>Order delivery on Uber Eats!</h5>
                  </a>
                </div>
              </div>
              <!-- Amazon Delivery -->
              <div class="col-md-4">
                <div class="logo-div logo-div-height">
                  <a target="_blank" href="https://www.amazon.com/restaurants/crogan%27s-montclair-oakland/d/B01M03ROZM">
                    <img class="col-img logo-img" src="img/amazon.jpg" alt="Link to Amazon delivery Crogan's">
                  <h5>Order delivery on Amazon!</h5>
                  </a>
                </div>
              </div>
              <!-- Doordash Delivery -->
              <div class="col-md-4">
                <div class="logo-div logo-div-height">
                  <a target="_blank" href="https://www.doordash.com/store/crogans-montclair-restaurant-oakland-46272/?utm_campaign=46272&utm_medium=website&utm_source=partner-link">
                    <img class="col-img logo-img" src="img/doordash.png" alt="Link to Doordash delivery Crogan's">
                  <h5>Order delivery on Doordash!</h5>
                  </a>
                </div>
              </div>
            </div>
              <!-- Heading for why dine with us -->
              <div>
                <h1 id="heading" class="font-weight-bold font-white">Rather dine in person?</h1>
                <!-- Description of Delivery/Reservations -->
                <div class="text-center">
                  <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us"><h2 class="font-weight-bold mt-4">To make a reservation online go to Chowtime!</h2></a>
                  <h4 id="lrgParties" class="mx-auto">To make a reservation for more than 20 people or to reserve our private backroom, please call the restaurant directly at:</h4>
                  <h4 class="font-weight-bold mb-3"><a href="tel:15103392098"><i class="fas fa-phone"></i>(510)339-2098</a></h4>
                  <div class="row mt-2">
                    <div class="col-4-sm mx-auto">
                      <a target="_blank" href="http://chowtime.com/app/user?id=crogans.94611.us">
                        <img class="col-img cover-img chow-logo" alt="Chowtime Logo" src="img/chowTime.png">
                      </a>
                      <p class="mt-2">*Reservations are for dining room only!*</p>
                      <p class="mb-3">Cocktail area is open seating</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  `
}

const router = new VueRouter({
  routes: [
  {
    path: '/home',
    component: home
  },
  {
    path: '/menu',
    component: menu
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/reservations',
    component: reservations
  },
  {
    path: '/contact',
    component: contact
  },
  {
    path: '/delivery',
    component: delivery
  }
  ]
})
router.push('home')
var routeTest = new Vue ({
    router,
    el:'#app',
    data: {
      
    },
    methods: {
      
    }
}).$mount('#app')