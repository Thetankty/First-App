window.addEventListener('scroll', function() {
    var text = document.querySelector('.hidden-text');
    var position = text.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(position < screenPosition) {
        text.style.opacity = "1";
    } else {
        text.style.opacity = "0";
    }
});