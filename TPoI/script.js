
function openChannel(evt, channelName) {
  // Declare all variables
  var i, tab, channel;



  // Get all elements with class="tabcontent" and hide them
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
  }


  // Get all elements with class="tablinks" and remove the class "active"
  channel = document.getElementsByClassName("channel");
  for (i = 0; i < channel.length; i++) {
    channel[i].className = channel[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(channelName).style.display = "block";
  evt.currentTarget.className += " active";
} 