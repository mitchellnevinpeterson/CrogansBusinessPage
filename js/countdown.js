// ---------------------------------------
// Countdown to Saint Patty's day function
// ---------------------------------------
function countDown() {
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
  var countDownDate = new Date(year, 2, 17, 0, 0, 0, 0).getTime()

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
    document.getElementById("countDown").innerText = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "

    // If the count down is finished, write some text
    if (month == 2 && day == 17) {
      clearInterval(x);
      document.getElementById("countDown").innerText = "Happy Saint Patty's Day!"
      document.getElementById("daysTill").style.display = "none"
    }
  }, 1000)
}
requestAnimationFrame(countDown)