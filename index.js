var colorWell;
var defaultColor = "#ffffff";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }

  function updateFirst(event) {
    var html = document.querySelector("html");
  
    if (html) {
      html.style.backgroundColor = event.target.value;
    }
  }

  function updateAll(event) {
    document.querySelectorAll("html").forEach(function(html) {
      html.style.backgroundColor = event.target.value;
    });
  }

  $(function () {
    var audioBtn = $('.audio_button'),
    audioWrap = $('.audio_wrap'),
    audio = document.getElementById('audio');
  
    audioBtn.on('click', function () {
      if( audioWrap.hasClass('play') ) {
        audio.pause();
        audioWrap.removeClass('play');
      } else {
        audio.play();
        audioWrap.addClass('play');
      }
    });
  });