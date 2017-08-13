// var tl1 = new TimelineMax({});
var $box = $('.box');
var myFunction = function() {
  console.log('executed')
};
// TM Animation
var tween = new TimelineMax();
tween.add([TweenMax.to($box, .5, {
    height: 250,
    onComplete: myFunction
  }),
  TweenMax.to($box, 1, {
    backgroundColor: 'blue',
    delay: 0.2
  })
]);
// tl1.add(tween, 2);

// ScrollMagic Config
var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: ".box",
    triggerHook: 0,
    duration: 250
  })
  .setTween(tween)
  .addIndicators({
    name: "expand"
  })
  .setPin('.box')
  .addTo(controller);

// var scene2 = new ScrollMagic.Scene({
//     triggerElement: ".box",
//     triggerHook: 0,
//     duration: 250,
//     offset: 150
// })
// .setTween(colorRed)
// .addIndicators({
//   name: "colorBlue"
// })
// .addTo(controller);
