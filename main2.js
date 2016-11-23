$(document).ready(function() {
    (function() {
        var documentEl = $(document),
            parallaxBg = $('div.parallax-bg');

        documentEl.on('scroll', function() {
            var currScrollPos = documentEl.scrollTop();
            parallaxBg.css('background-position', '0 ' + -currScrollPos / 4 + 'px');
        });
    })();

   $("nav ul li").on('click', function() {
      $("li.active2").removeClass('active2');
      $(this).addClass('active2');

      var boxToShow = $(this).attr('rel');

      $('.active').fadeOut(500, showNextbox);

      function showNextbox() {
        $(this).removeClass('active');

        $("#" + boxToShow).fadeIn(500, function() {
          $(this).addClass('active');
        });
      }
    });

    $("#panel3 .info3 .extraul .specialli").on('click', function() {
      $("li.active2").removeClass('active2');
      $(this).addClass('active2');

        var storyToShow = $(this).attr('rel');

        $('.active4').slideUp(500, showNextstory);

        function showNextstory() {
        $(this).removeClass('active4');

        $("#" + storyToShow).slideDown(500, function() {
          $(this).addClass('active4');
        });
      }
    });

    $("#panel6 .info2 ul li").on('click', function() {
      $("li.active5").removeClass('active5');
      $(this).addClass('active5');

        var storyToShow = $(this).attr('rel');

        $('.active6').slideUp(500, showNextstory);

        function showNextstory() {
        $(this).removeClass('active6');

        $("#" + storyToShow).slideDown(500, function() {
          $(this).addClass('active6');
        });
      }
    });

});
