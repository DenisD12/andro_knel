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

});
