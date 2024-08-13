$(document).ready(function() {
    $('#day-night-switch').on("click", function() {
        if ($('html').is('.light-mode')) {
            $('html').removeClass('light-mode');
            $('html').addClass('dark-mode');
        } else {
            $('html').removeClass('dark-mode');
            $('html').addClass('light-mode');
        }
    });
    
    $('.menu-link').on('click', function(event) {
        event.preventDefault();

        var target = $(this).data('target');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 600);
    });

});
