$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.button-collapse').sideNav({'edge': 'left'});
    if (isTouchDevice()) {
        $('#nav-mobile').css({overflow: 'auto'});
    }
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
});
// Detect touch screen and enable scrollbar if necessary
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}