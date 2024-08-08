$('#day-night-switch').on("click", function() {
    if ($('html').is('.light-mode')) {
        $('html').removeClass('light-mode');
        $('html').addClass('dark-mode');
    } else {
        $('html').removeClass('dark-mode');
        $('html').addClass('light-mode');
    }
});