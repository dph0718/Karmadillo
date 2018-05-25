
    //need to GET karmaScore from user database.
    //[ ] show friends' karma scores?
    //[ ] GET user's events
    //[ ] if no appraisal ~ 24 hours after event, demerits. (on server side)
    //[ ] options on event management page: 
    // [ ] good karma, no karma, bad karma (in case they had a good excuse);

    let karmaScore = 100;
    let meterScore = karmaScore / 1000 * 90
    let pos = meterScore;
    const needleTime = 1500;
    const bell = new Audio("../noises/bell.wav");



    // function spinNeedle() {
    //   console.log('spinning...', pos);
    //   $('.needle').animate({ degrees: pos }, {
    //     step: function (now, fx) {
    //       // $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
    //       // $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
    //       $(this).css('transform', 'rotate(' + now + 'deg)');
    //     },
    //     duration: 500
    //   }, 'swing');

    // };

    // $(document).keydown(() => {
    //   console.log('pres');
    //   console.log(pos);
    //   pos += 5;
    //   spinNeedle();
    // });


    //this function animates the needle
    function animateNeedle() {
      $('.needle').animate({ degrees: -90 }, {
        step: function (now, fx) {
          // $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          // $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: 0
      }, 'linear');

      $('.needle').animate({ degrees: meterScore }, {
        step: function (now, fx) {
          // $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          // $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: needleTime
      }, 'swing');

      setTimeout(() => {
        $('.needle').addClass('shadow-pulse');
      }, needleTime);

      setTimeout(() => {
        bell.play();
      }, needleTime - 150);
    };

    $(document).ready(animateNeedle);

