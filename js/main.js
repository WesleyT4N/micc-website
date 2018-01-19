$(document).ready(function() {

  // Handles the homepage animation
  if (window.location.pathname === "/") {
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
          setTimeout(() => {
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
          setTimeout(() => {
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
          setTimeout(() => {
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

});


