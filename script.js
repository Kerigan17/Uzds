let popup = $('.popup');
let popupOne = $('.popup-one');
let block = $('.block');

popup.hide();
block.css('opacity', '1')

new WOW({
    animateClass: 'animate__animated'
}).init();

block.click(function (event){
    event.stopPropagation();
})
$('.closed').click(function (){
    popup.hide();
})
popup.click(function (){
    popup.hide();
})

$('.btn-one').click(function (){
    if (popupOne.hide) $('.popup-one').show();
    block.addClass('box_animate');
})
$('.btn-two').click(function (){
    if (popupOne.hide) $('.popup-two').show();
    block.addClass('box_animate');
})
$('.btn-three').click(function (){
    if (popupOne.hide) $('.popup-three').show();
    block.addClass('box_animate');
})
$('.btn-project').click(function (){
    if (popupOne.hide) $('.popup-project').show();
    block.addClass('box_animate');
})
$('.btn-montage').click(function (){
    if (popupOne.hide) $('.popup-montage').show();
    block.addClass('box_animate');
})

//анимация
//block.addEventListener("animationend", AnimationHandler, false);
function AnimationHandler () {
    block.removeClass('box_animate');
}

let bigRat = $('#bigRat');
let mouseOne = $('#mouse-one');
let mouseTwo = $('#mouse-two');
let mouseThree = $('#mouse-three');
let windowXscroll = $(window).scrollTop();

bigRat[0].src = '../images/rats/bigRat.png';
bigRat.css('top', windowXscroll + 460);

$(window).scroll(function() {
    windowXscroll = $(window).scrollTop();
    if (windowXscroll < 1430) {
        bigRat.removeClass('ratRun');
        bigRat.css('top', windowXscroll + 460);
    } else {
        bigRat.addClass('ratRun');
    }
    if (windowXscroll < 1350) {
        mouseOne.css('bottom', 65-windowXscroll/2);
        mouseOne.css('left', 73-windowXscroll/2);

        mouseTwo.css('top', 82-windowXscroll/2);
        mouseTwo.css('left', 415-windowXscroll/4);

        mouseThree.css('bottom', 65+windowXscroll/2);
        mouseThree.css('right', 73-windowXscroll/2);
    }
});

bigRat.click(function (){
    bigRat.src = 'ratAnimation/animation1.png'
})
