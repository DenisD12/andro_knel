$(document).ready(function() {
    (function() {
        var documentEl = $(document),
            parallaxBg = $('div.parallax-bg');

        documentEl.on('scroll', function() {
            var currScrollPos = documentEl.scrollTop();
            parallaxBg.css('background-position', '0 ' + -currScrollPos / 4 + 'px');
        });
    })();
});
