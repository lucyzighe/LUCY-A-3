$(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault();
      var username = $('#Name').val();
      alert (username + ' ' + 'we have received your message. Thank you for reaching out to us!');
    });
  });
    $(document).ready(function() {
      $('.image-text-container').hover(function() {
        $(this).find('img').hide();
        $(this).find('.text').show();
      }, function() {
        $(this).find('.text').hide();
        $(this).find('img').show();
      });
    });
    $(document).ready(function(){
        $("#hide").click(function(){
          $("p1").hide();
        });
        $("#show").click(function(){
          $("p1").show();
        });
      });
      $(document).ready(function(){
        $("#hide").click(function(){
          $("p2").hide();
        });
        $("#show").click(function(){
          $("p2").show();
        });
      });
      $(document).ready(function(){
        $("#hide").click(function(){
          $("p3").hide();
        });
        $("#show").click(function(){
          $("p3").show();
        });
      });
      $(document).ready(function(){
        $("button").click(function(){
          $("#design").fadeIn();
          $("#development").fadeIn("slow");
          $("#product management").fadeIn(3000);
        });
      })
      