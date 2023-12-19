// when page is done loading these fuctions will trigger
window.onload = function() {
  navSticky()
}
// when scrolling these fuctions will trigger
window.onscroll = function() {
  navSticky()
}
// getting the screen width value
var screenWidth = window.innerWidth
// ----------------------------------------------------------------------------
// Scrolling to the top when clicking on different links on the single page app
// ----------------------------------------------------------------------------
// a function for scrolling to the top of the page
function toTheTop() {
  var top = window.scrollTo(0, 0)
  return top
}

// -----------------------------------------------------
// Reloading the page when user resizes the window
// -----------------------------------------------------
window.onresize = function(){
  if(window.innerWidth >= 1030){
    location.reload(true)
  }
}

// ---------------------------------------
// Dynamic hamburger Icon for navigation
// ---------------------------------------
$(document).ready(function(){
  // making the dynamic hamburger open and close when user clicks on the navbar
  $('#smallNavDrop').click(function(){
    $('#nav-icon1').toggleClass('open')
  })
  // making the dynamic hamburger close when user clicks off of dropdown menu
  $('#main').click(function(){
    $('#nav-icon1').removeClass('open')
  })
})

// -----------------------------------------------------
// Making the navbar sticky
// -----------------------------------------------------
// selecting the navbar by id for large devices
var navLrg = document.getElementById("navLrg")
var sticky = navLrg.offsetTop
// selecting the navbar by id for small devices
var navSmall = document.getElementById("buttonDrop")
var stickySmall = navSmall.offsetTop

// the fuction that will add or remove class sticky
function navSticky() {
  // For the large navigation sticky 
  if (window.pageYOffset >= 180) {
    document.getElementById("navLrg").classList.add("sticky")
  } else {
    document.getElementById("navLrg").classList.remove("sticky")
  }
  // For the small navigation sticky
  if (window.pageYOffset >= 80) {
    document.getElementById("buttonDrop").classList.add("stickySmall")
    document.getElementById("smallNavDrop").classList.add("stickySmall")
  } else {
    document.getElementById("buttonDrop").classList.remove("stickySmall")
    document.getElementById("smallNavDrop").classList.remove("stickySmall")
  }
  if(screenWidth >= 1030 && window.pageYOffset > 180) {
  document.getElementById("foodMenu").classList.add("sticky-food-nav")
  } else{
    document.getElementById("foodMenu").classList.remove("sticky-food-nav")
  }
  // For the food menu navigation sticky
  if(screenWidth <= 1030){
   document.getElementById("foodMenu").classList.add("sticky-food-nav")
  }
}

// -----------------------------------------------------
// Detecting if the user scrolls down or up
// -----------------------------------------------------
// Initial state
var scrollPos = 0
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos && window.pageYOffset >= 170 && screenWidth <= 1030){
    // setting the attribute dataScrollDirection of the footer to up to test function
    document.getElementById("footer").setAttribute('dataMenuScrollDirection', 'UP')
    // making the menu nav fade into view when scrolling up
    document.getElementById("foodMenu").classList.remove("fadeOutUp")
    // making the menu nav fade into view when scrolling up
    document.getElementById("smallNavDrop").classList.remove("fadeOutUp")
    console.log("up")
  }else if(window.pageYOffset >= 170 && screenWidth <= 1030) {
    console.log("down")
    // setting the attribute dataScrollDirection of the footer to down to test function
    document.getElementById("footer").setAttribute('dataMenuScrollDirection', 'DOWN')
    // making the menu nav fade out of view when scrolling down
    document.getElementById("foodMenu").classList.add("fadeOutUp")
    // making the webpage nav fade out of view when scrolling down
    document.getElementById("smallNavDrop").classList.add("fadeOutUp")
    // closing the dropdown nav (if not already closed) when user scrolls down
    document.getElementById("dropMenu").classList.remove("show")
    // resetting the hamburger Animation
    document.getElementById("nav-icon1").classList.remove("open")
  }
  // saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top
})

// ---------------------------------------
// Changing the body background-color function
// ---------------------------------------
function footerPos(event) {
  // getting the value of the inner text of the element clicked on
  var target = event.target.innerText.toLowerCase()
  // Changing the footer position if you click on other links other than the home page
  if (target == "menu" || target == "about us" || target == "reservations" || target == "contact" || target == "delivery") {
    document.getElementsByTagName("footer")[0].style.position = "absolute" 
  }
}

// ---------------------------------------
// Changing the body background-color function
// ---------------------------------------
// making the nav disapear when switching menus
function fadeOut() {
  setTimeout(function(){ 
    if(screenWidth <= 1030){
    console.log("working")
    // making the menu nav fade out of view when scrolling down
    document.getElementById("foodMenu").classList.add("fadeOutUp")
    // making the webpage nav fade out of view when scrolling down
    document.getElementById("smallNavDrop").classList.add("fadeOutUp")
    } 
  }, 100)
  
}



// -----------------------------------------
// Adding Animation to the menu navigation
// -----------------------------------------

// the function that adds the classes to make it animated
// function navAnimate() {
//     // pageYOffset should be 240
//     if (window.pageYOffset >= 240 && screenWidth <= 1030) {
//       document.getElementById("foodMenu").classList.add("fadeOutUp")
//     } else {
//       document.getElementById("foodMenu").classList.remove("fadeOutUp")
//     }
//   }