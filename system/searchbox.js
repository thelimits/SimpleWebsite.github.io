const searchdefault = document.querySelector(".btn-searchdef");
const back = document.querySelector(".btn-cancel");
let ww = $(window).width();
searchdefault.addEventListener('click', () =>
{
    searchdefault.style.display = "none";
    $(".search-box").addClass("active");
    $(".header .right-header .search-box input").css("display" , "block");
    $(".header .right-header .search-box .btn-search").addClass("actives");
    $(".header .right-header .search-box .btn-cancel").addClass("activess");
    
});

back.addEventListener('click', () =>
{
    searchdefault.style.display = "";
    $(".search-box").removeClass("active");
    $(".header .right-header .search-box input").css("display" , "");
    $(".header .right-header .search-box .btn-search").removeClass("actives");
    $(".header .right-header .search-box .btn-cancel.activess").removeClass("activess");

});

const mq = window.matchMedia( "(min-width: 800px)" );

// media query event handler
if (matchMedia) 
{
    const mq = window.matchMedia("(min-width: 800px)");
    WidthChange(mq);
}
  
// media query change
function WidthChange(mq) 
{
    if (mq.matches) 
    {
        $(".header .right-header .scr").addClass("search-boxx");
      // window width is at least 500px
    } else 
    {
        $(".header .right-header .scr").addClass("search-boxx");
      // window width is less than 500px
    }
  
}

