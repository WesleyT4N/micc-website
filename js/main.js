function homeCheck() {
  var loc = window.location.pathname; 
  if (loc === "/" || loc.includes("index")) {
    var html = document.getElementsByTagName("html")[0];
    html.classList += " home";
  }
}

// Helper function for recruitment page sector interactivity
function hideOtherSectorDescriptions(num, buttons, descs) {
  for (var i = 1; i <= 6; i++) {
    if (i === num) {
      descs[i-1].style.display = "block";
    } else {
      descs[i-1].style.display = "none";
    }
  }
}

// Document ready callback
var docReady = function() {
  // Set copyright date
  var date = document.getElementsByClassName("date")[0];
  date.innerText = (new Date()).getFullYear();

  // IE Check
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  // IE fallback for homepage animation
  if (isIE11) {
    var hs1 = document.getElementsByClassName("home-sequence-1")[0];
    var hs2 = document.getElementsByClassName("home-sequence-2")[0];
    var hs3 = document.getElementsByClassName("home-sequence-3")[0];
    var body = document.body;

    hs1.style.display = "block";
    hs2.style.display = "block";
    hs3.style.display = "block";
    body.style.display = "block";
  }

  // Handles the homepage animation
  var loc = window.location.pathname; 
  if ((loc === "/" || loc.includes("index")) && !isIE11) {
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var sl1 = document.getElementById("seqLink1");
    var sl2 = document.getElementById("seqLink2");
    var sl3 = document.getElementById("seqLink3");

    // Show sequence 1 (All of these use TypeIt.js)
    var seq1 = function () {
      s1.style.display = "block";
      var seq = new TypeIt('.home-sequence-1', {
        speed: 25,
        callback: function () {
          setTimeout(function() {
            s1.style.display = "none";
            seq.destroy();
            seq2();
          }, 4000);
        }
      });
    };
    
    // Show sequence 2
    var seq2 = function () {
      s2.style.display = "block";
      var seq = new TypeIt('.home-sequence-2', {
        speed: 25,
        callback: function () {
          setTimeout(function() {
            s2.style.display = "none";
            seq.destroy();
            seq3()
          }, 4000);
        }
      });
    };

    // Show sequence 3
    var seq3 = function () {
      s3.style.display = "block";
      var seq = new TypeIt('.home-sequence-3', {
        speed: 25,
        callback: function () {
          setTimeout(function () {
            s3.style.display = "none";
            seq.destroy();
            seq1();
          }, 4000);
        }
      });
    };

    // Start with sequence 1 when the page first opens and loop 
    // using infintie recursion
    seq1();
  }



  if (loc.includes("about")) {
    // Build list of sector buttons and corresponding descriptions
    var buttons = [];
    var descs = [];
    for (var i = 1; i <= 6; i++) {
      buttons.push(document.getElementsByClassName("sector-btn-"+i)[0]);
      descs.push(document.getElementsByClassName("sector-description-"+i)[0]);
    }

    // Add event listeners to each button
    buttons.forEach(function(btn, i) {
      btn.addEventListener("click", function () {
        hideOtherSectorDescriptions(i+1, buttons, descs);
      });
    });
  }

  if (loc.includes("work")) {
  }

  if (loc.includes("leadership")) {
  }
};

document.addEventListener("load", homeCheck);

// Vanilla JS version of JQuery's $(document).ready
if (document.readyState === "complete" || 
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
   docReady();
} else {
  document.addEventListener("DOMContentLoaded", docReady);
}

