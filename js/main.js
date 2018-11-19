$(document).ready(function () {
    $(window).scroll(function () {
        if ( $(window).scrollTop() > 700){
            $(`nav`).addClass(`bajado`);
        } else {
            $(`nav`).removeClass(`bajado`);
        }
    })
});