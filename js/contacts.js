'use strict';
function changeLinksColor () {
  var contactCont = document.getElementById ('contactCont');
  var greenA = contactCont.getElementsByTagName('a');
  for (var i = 0; i < greenA.length; i++) {
      greenA[i].style.color = '#44a703';
  }
}
document.addEventListener("DOMContentLoaded", changeLinksColor);
