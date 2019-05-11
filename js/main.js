$(function(){
    $(".loader-overlay").fadeOut();
    setInterval(function(){
        $(".logo_image_blurred").toggleClass('hidden');
        $(".logo_image").toggleClass('hidden');
    }, 3000)
});