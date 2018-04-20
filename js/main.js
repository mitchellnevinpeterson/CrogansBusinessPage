
// ---------------------------------------
// Countdown to Saint Patty's day function
// ---------------------------------------
// Making the year reset every year to the new future year
var date = new Date()
var year = date.getFullYear() + 1
// if the year is the same and before March 17
var day = date.getDate()
var month = date.getMonth()
// if it is before saint patty's day then the year needs to be current year not + 1
if (month < 2) {
  year = date.getFullYear()
}else if (month == 2 && day < 17) {
  year = date.getFullYear()
}
// Set the date we're counting down to
var countDownDate = new Date("March 17," + "'" + year + "'" + "00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime()

  // Find the distance between now an the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result in the element with id="countDown"
  document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "

  // If the count down is finished, write some text 
  if (month == 2 && day == 17) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "Happy Saint Patty's Day!"
  }
}, 1000)

// -----------------------------------------------------
// Making the navbar sticky
// -----------------------------------------------------
// when scrolling this fuction will trigger
window.onscroll = navSticky()
// selecting the navbar by id
var navbar = document.getElementById("navLrg")
var sticky = navbar.offsetTop
console.log(sticky)
console.log(window.pageYOffset)
function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.className = ("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

// -----------------------------------------------------
// Making sure the slideshow is hiden upon page refresh
// -----------------------------------------------------
// creating a variable that marks when the page reloads type = 0 if page has not reloaded
var pageReload = window.performance.navigation.type
// if type = 1 then the page has relaoded
// if type = 2 then the back button was used
if(pageReload == 1 || pageReload == 2) {
  // making the hard coded slideshow html not displayed
  document.getElementById("slideshow").className = ("hide")
}

// ---------------------------------------
// Switching the menus imgs function
// ---------------------------------------
function menuSwap(event) {
  // getting the name of the clicked element
  var element = event.target.tagName
  // console.log(element)
  // getting the text content of the "clicked" element
  var selected = event.target.innerHTML
  // console.log(selected)
  // getting the info from the dropdown links under "menu"
  var menu = document.getElementsByClassName("menu")
  // looping through the link text content
  for(i = 0; i < menu.length; i ++) {
  // getting the value content of the menu links
  var menuValue = menu[i].attributes.value.textContent
  // console.log(menuValue)
  // getting the link text content
  var menuName = menu[i].innerHTML
  // console.log(menuName)
  // if the clicked element text content matches the value content then replace image name
    if(selected == menuName) {
      document.getElementById("menuImage").src = "img/" + menuValue + ".png"
    }
  }
  // The function to hide the slideshow when clicking on other links
  function hide() {
    document.getElementById("slideshow").className = ("hide")
  }
  // hiding the slideshow when user clicks a different link
  if(element == "A") {
    hide()
  }
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
    <div class="menuDivWrap text-center">
      <ul class="menu-nav">
        <li id="menuLink"><a class="menu font-white text-shadow-blk" value="startersMenu">Starters/Soups</a></li>
        <li id="menuLink"><a class="menu font-white text-shadow-blk" value="entreeMenu">Entr&#233es</a></li>
        <li id="menuLink"><a class="menu font-white text-shadow-blk" value="sandwichMenu">Sandwiches/Pasta/Salad</a></li>
        <li id="menuLink"><a class="menu font-white text-shadow-blk" value="dessertMenu">Dessert</a></li>
        <li id="menuLink"><a class="menu font-white text-shadow-blk" value="happyHourMenu">Happy Hour!</a></li>
      </ul>
      <img id="menuImage" class="menus" src="img/startersMenu.png" alt="Crogan's Menu">
    </div>
  `
}
const about = {
  template:`
    <div id="aboutDivWrap" class="text-center">
      <!-- About Page Heading -->
      <div>
        <h1 id="aboutHeading" class="font-weight-bold font-white">The "Cheers" of Montclair in Oakland!</h1>
      </div>
      <!-- Description of Crogan's -->
      <div>
        <p class="p-tag-about">Good times in the heart of Montclair! When your in the mood for good times and great food, be sure to visit our restaurant. We're located in one of the most pleasant Village settings and are known for our delightful staff and excellent dining.</p>
      </div>
      <!-- Grid of Links -->
      <!-- Check Please link -->
      <div id="reviewLinks" class="row mx-auto">
        <div class="col-sm-4">
          <div class="img-div">
            <a href="https://www.kqed.org/checkplease/1345/crogans-montclair-reviews" target="_blank">
              <img class="col-img" src="img/checkPlease.png" alt="Link to Check Please Crogan's">
            </a>
          </div>
          <h5>Check us out on Check Please!</h5>
        </div>
        <!-- Oakland Magazine link -->
        <div class="col-sm-4">
          <div class="img-div">
            <a href="http://www.oaklandmagazine.com/Oakland-Magazine/July-August-2010/Best-of-Oakland/" target="_blank">
              <img class="col-img" src="img/oaklandMag.gif" alt="Link to Oakland Magazine">
            </a>
          </div>
          <h5>Voted Best Buffalo Wings!</h5>
        </div>
        <!-- Facebook Link -->
        <div class="col-sm-4">
          <div class="img-div">
            <a href="https://www.facebook.com/crogansmontclair" target="_blank">
              <img class="col-img" src="img/facebook.png" alt="Link to Facebook Crogan's">
            </a>
          </div>
          <h5>Follow us on Facebook!</h5>
        </div>
      </div>
    </div>
  `
}
const reservations = {
  template:`
    <div class="text-center">
          <h1>Blog</h1>
          <img src="img/bridge.jpg" alt="Art work of the golden gate bridge">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </div>
  `
}
const find = {
  template:`
    <div class="text-center">
          <h1>Menu</h1>
          <img src="img/soldier.jpg" alt="Art work of a soldier entering a new path">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </div>
  `
}
const delivery = {
  template:`
    <div class="text-center">
          <h1>Menu</h1>
          <img src="img/soldier.jpg" alt="Art work of a soldier entering a new path">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
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
    path: '/find',
    component: find
  },
  {
    path: '/delivery',
    component: delivery
  }
  ]
})
var routeTest = new Vue ({
    router,
    el:'#app',
    data: {
      
    },
    methods: {

    }
}).$mount('#app')
