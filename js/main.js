
// when scrolling these fuctions will trigger
window.onscroll = function() {
  navSticky()
}

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
  if (window.pageYOffset >= 0) {
    document.getElementById("buttonDrop").classList.add("stickySmall")
    document.getElementById("smallNavDrop").classList.add("stickySmall")
  } else {
    document.getElementById("buttonDrop").classList.remove("stickySmall")
    document.getElementById("smallNavDrop").classList.remove("stickySmall")
  }
}

// -----------------------------------------------------
// Detecting if the user scrolls down or up
// -----------------------------------------------------
// getting the screen width value
var screenWidth = window.innerWidth
// Initial state
var scrollPos = 0
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos && screenWidth <= 1030){
    // setting the attribute dataScrollDirection of the footer to up to test function
    document.getElementById("footer").setAttribute('dataScrollDirection', 'UP')
    // making the menu nav fade into view when scrolling up
    document.getElementById("navSmall").classList.remove("fadeOutUp")

  }else if(screenWidth <= 1030 && window.pageYOffset >= 80) {
    // setting the attribute dataScrollDirection of the footer to down to test function
    document.getElementById("footer").setAttribute('dataScrollDirection', 'DOWN')
    // making the webpage nav fade out of view when scrolling down
    document.getElementById("navSmall").classList.add("fadeOutUp")
    // closing the dropdown nav (if not already closed) when user scrolls down
    document.getElementById("dropMenu").classList.remove("show")
    // resetting the hamburger Animation
    document.getElementById("nav-icon1").classList.remove("open")
  }
  // saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top
})

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


// adding scroll event
// window.addEventListener('scroll', function(){
//   // detects new state and compares it with the new one
//   if ((document.body.getBoundingClientRect()).top > scrollPos && screenWidth <= 1030)
//     // making the website nav appear when scrolling up
//     document.getElementById("navSmall").classList.remove("fadeOutUp")
//     console.log("working remove")
//     console.log((document.body.getBoundingClientRect()).top)
//     console.log(scrollPos)
  
//   if((document.body.getBoundingClientRect()).top < scrollPos && window.pageYOffset >= 170 && screenWidth <= 1030) 
//     console.log("working")
//     // making the website nav disappear when scrolling down
//     document.getElementById("navSmall").classList.add("fadeOutUp")
  
//   // saves the new position for iteration.
//   scrollPos = (document.body.getBoundingClientRect()).top
// })


// -----------------------------------------------------
// Making sure the slideshow is hiden upon page refresh
// -----------------------------------------------------
// creating a variable that marks when the page reloads type = 0 if page has not reloaded
// var pageReload = window.performance.navigation.type

// if type = 1 then the page has relaoded
// if type = 2 then the back button was used
// if (pageReload || pageReload == 2) {
//   // making the hard coded slideshow html not displayed and footer display abosolute
//   document.getElementById("slideshow").style.display = "none"
//   document.getElementById("slideshow").className = ("hide")
//   document.getElementsByTagName("footer")[0].style.position = "absolute"
// }



// ---------------------------------------
// Switching the menus imgs function
// ---------------------------------------
// function menuSwapZoom(event) {
//   // getting the name of the clicked element
//   var element = event.target.tagName
//   // getting the text content of the "clicked" element
//   var selected = event.target.innerHTML
//   // getting the info from the dropdown links under "menu"
//   var menu = document.getElementsByClassName("menu-zoom")
//   // looping through the link text content
//   for (i = 0; i < menu.length; i ++) {
//   // getting the value content of the menu links
//   var menuValue = menu[i].attributes.value.textContent
//   // getting the link text content
//   var menuName = menu[i].innerHTML
//   // if the clicked element text content matches the value content then replace image name
//     if (selected == menuName) {
//       document.getElementById("img01").src = "img/" + menuValue + ".jpg"
//     }
//   }
// }

// ---------------------------------------
// Zooming in on clicked menu imgs function
// ---------------------------------------

// function zoom() {
//     // Display none on header, nav and footer while zoomed
//     // Header
//     document.getElementById("topHeader").classList.add("hide")
//     // Large screen Nav
//     document.getElementById("navLrg").classList.add("hide")
//     // Small device Nav
//     document.getElementById("navSmall").classList.add("hide")
//     // Original menu img
//     document.getElementById("menuImage").classList.add("hide")
//     // Reservation section
//     document.getElementById("menuReservation").classList.add("hide")
//     // Link section
//     document.getElementById("links").classList.add("hide")
//     // Footer
//     document.getElementsByClassName("footer")[0].classList.add("hide")
//     // Get the src from original image
//     var menuSrc = document.getElementById("menuImage")
//     // Get the modal
//     var modal = document.getElementById("myModal")
//     // Get the image and insert it inside the modal - use its "alt" text as a caption
//     var modalImg = document.getElementById("img01")
//     // Changing the style of modal
//     modal.style.display = "block"
//     // Changing the src of img modal
//     modalImg.src = menuSrc.src
// }

// When the user clicks on <span> (x), close the modal
// function closeZoom() { 
//     // Display the header, nav and footer after closing zoom
//     // Header
//     document.getElementById("topHeader").classList.remove("hide")
//     // Large screen Nav
//     document.getElementById("navLrg").classList.remove("hide")
//     // Small device Nav
//     document.getElementById("navSmall").classList.remove("hide")
//     // Original menu img
//     document.getElementById("menuImage").classList.remove("hide")
//     // Reservation section
//     document.getElementById("menuReservation").classList.remove("hide")
//     // Link section
//     document.getElementById("links").classList.remove("hide")
//     // Footer
//     document.getElementsByClassName("footer")[0].classList.remove("hide")
//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0]
//     // Get the modal
//     var modal = document.getElementById("myModal")
//     // Display none to the modal
//     modal.style.display = "none"
// }



// making the navagation button work on one click on small devices
// function singleClick() {
//   var dropMenu = document.getElementById("dropMenu")
//   var buttonDrop = document.getElementById("buttonDrop")
//   buttonDrop.classList.add("show")
//   buttonDrop.ariaExpand = "true"
//   dropMenu.classList.add("show")

//   var dropMenu = document.getElementById("dropMenu")
//   var target = event.target.tagName
//   console.log(target)
//   console.log(dropMenu)
//   if(dropMenu.style.display === "" || dropMenu.style.display == "none"){
//     dropMenu.style.display = "block"
//   }
//   if(target == "A") {
//     dropMenu.style.display = "none"
//   }
// }

// -----------------------------------------------
// Hiding the slide show in original HTML function
// -----------------------------------------------
// The function to hide the slideshow when clicking on other links
  // function hide() {
  //   // getting the name of the clicked element
  //   var element = event.target.tagName
  //   // hiding the slideshow when user clicks a different link
  //   if (element == "A") {
  //     document.getElementById("slideshow").style.display = "none"
  //     document.getElementById("slideshow").className = ("hide")
  //   } 
  // }

// ---------------------------------------
// Switching the menus imgs function
// ---------------------------------------
// function menuSwap(menuNav) {
//   // getting the name of the clicked element
//   var element = menuNav.target.tagName
//   // getting the text content of the "clicked" element
//   var selected = menuNav.target.innerHTML
//   // getting the value assigned to each button for tab navigation
//   var buttonSelected = menuNav.toElement.value
//   // getting the info from the dropdown links under "menu"
//   var menu = document.getElementsByClassName("menu")
//   // looping through the link text content
//   for (i = 0; i < menu.length; i ++) {
//   // getting the value content of the menu links
//   var menuValue = menu[i].attributes.value.textContent
//   // getting the link text content
//   var menuName = menu[i].innerHTML
//   // if the clicked element text content matches the value content then replace image name
//     if (selected == menuName || buttonSelected == menuName) {
//       document.getElementById("menuImage").src = "img/" + menuValue + ".jpg?lastmod=12345678"
//     }
//   }
//   // scrolling down to hide the logo and to show the menu better
//   var yOffset = window.pageYOffset
//   // this will only scroll if y offset is less than the logo height (For on page app the yOffset is 174)
//   if(yOffset < 330){
//     var y = 2
//     var scroll = setInterval (function() {
//       window.scrollTo(0, y)
//       y += 2
//       if(y > 330) clearInterval(scroll)
//     }, 6)
//   }
// }
