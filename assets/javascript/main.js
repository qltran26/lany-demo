window.onscroll = function() {myFunction()};

var navbar = document.getElementsByTagName("nav")[0];
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#flip').addEventListener('click', function() {
      var panel = document.querySelector('#panel');
      if (panel.style.display === 'none') {
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });
});

function playAudio() {
  document.getElementById("listen__box--cd-audio").play();
  document.getElementByClassName("listen__box--cd-image").style.animationPlayState = "running";
}
function pauseAudio() {
  document.getElementById("listen__box--cd-audio").pause();
  document.getElementByClassName("listen__box--cd-image").style.animationPlayState = "paused";
}

