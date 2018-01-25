function hideOtherSectorDescriptions(num) {
  for (var i = 1; i <= 6; i++) {
    if (i === num) {
      $('.sector-description-'+i).show();
    } else {
      $('.sector-description-'+i).hide();
    }
  }
}

$(document).ready(function() {
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    console.log("is ie");
    $(".home-sequence-1").show();
    $(".home-sequence-2").show();
    $(".home-sequence-3").show();
  }

  // Handles the homepage animation
  var loc = window.location.pathname; 
  if (loc === "/" || loc.includes("index") && !isIE11) {
    var $s1 = $("#s1");
    var $s2 = $("#s2");
    var $s3 = $("#s3");
    var $sl1 = $("#seqLink1");
    var $sl2 = $("#seqLink2");
    var $sl3 = $("#seqLink3");

    // Show sequence 1 (All of these use TypeIt.js)
    var seq1 = function () {
      $s1.show();
      var seq = new TypeIt('.home-sequence-1', {
        speed: 25,
        callback: function () {
          setTimeout(function() {
            $s1.hide();
            seq.destroy();
            seq2();
          }, 4000);
        }
      });
    };
    
    // Show sequence 2
    var seq2 = function () {
      $s2.show();
      var seq = new TypeIt('.home-sequence-2', {
        speed: 25,
        callback: function () {
          setTimeout(function() {
            $s2.hide();
            seq.destroy();
            seq3()
          }, 4000);
        }
      });
    };

    // Show sequence 3
    var seq3 = function () {
      $s3.show();
      var seq = new TypeIt('.home-sequence-3', {
        speed: 25,
        callback: function () {
          setTimeout(function () {
            $s3.hide();
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

  if (loc.includes("recruitment")) {
    var $btn1 = $(".sector-btn-1");
    var $btn2 = $(".sector-btn-2");
    var $btn3 = $(".sector-btn-3");
    var $btn4 = $(".sector-btn-4");
    var $btn5 = $(".sector-btn-5");
    var $btn6 = $(".sector-btn-6");

    var $desc1 = $(".sector-description-1");
    var $desc2 = $(".sector-description-2");
    var $desc3 = $(".sector-description-3");
    var $desc4 = $(".sector-description-4");
    var $desc5 = $(".sector-description-5");
    var $desc6 = $(".sector-description-6");
    $btn1.click(function() {
      hideOtherSectorDescriptions(1);
    });

    $btn2.click(function() {
      hideOtherSectorDescriptions(2);
    });

    $btn3.click(function() {
      hideOtherSectorDescriptions(3);
    }); 

    $btn4.click(function() {
      hideOtherSectorDescriptions(4);
    });

    $btn5.click(function() {
      hideOtherSectorDescriptions(5);
    });

    $btn6.click(function() {
      hideOtherSectorDescriptions(6);
    });
  }
  

});


