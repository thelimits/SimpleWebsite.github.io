
$(".header .right-header .scr .burger").on('click' , (event) =>
{
    event.preventDefault();
    $(".navbar-header .sub-menu").toggleClass("activesub-menu");
    $(".header .right-header .scr .burger ").toggleClass("toggle");
})