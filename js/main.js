$(document).ready(function () {
    $(".burger").click(function () { 
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $(".btn-up").fadeIn()
        } else{
            $(".btn-up").fadeOut()
        }
    })

    $(".btn-up").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800)
    });
});