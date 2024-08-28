$(".openNav").click(function() {
    $("#leftMenu").animate({
        width: '250px'
    }, 50)
    $("#home-content").animate({
        marginLeft: '250px'
    }, 50)
})

$(".closebtn").click(function() {
    $("#leftMenu").animate({
        width: '0px'
    }, 50)
    $("#home-content").animate({
        marginLeft: '0px'
    }, 50)
})

$("#leftMenu a").click(function() {

    var sectionId = $(this).attr("href");

    var positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({
        scrollTop: positionOfSection
    }, 2000);

})

$('#sliderDown .singer').click(function() {
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

window.onload = function() {

    countDownToTime("22 August 2024 8:32:57");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let day = Math.floor(timeDifference / (24 * 60 * 60));
    let hour = Math.floor((timeDifference - (day * (24 * 60 * 60))) / 3600);
    let min = Math.floor((timeDifference - (day * (24 * 60 * 60)) - (hour * 3600)) / 60);
    let sec = Math.floor((timeDifference - (day * (24 * 60 * 60)) - (hour * 3600) - (min * 60)))


    $(".day").html(`${day} D`);
    $(".hour").html(`${hour} h`);
    $(".minute").html(`${ min } m`);
    $('.second').html(`${ sec} s`)


    setInterval(function() {
        countDownToTime(countTo);
    }, 1000);
}
var maxLength = 100;
$('textarea').keyup(function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");

    } else {

        $("#chars").text(AmountLeft);
    }
});