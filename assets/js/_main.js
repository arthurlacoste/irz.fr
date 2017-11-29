/* ==========================================================================
jQuery plugin settings and other scripts
========================================================================== */

var getGif = function (search) {
  request = new XMLHttpRequest;
  request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+search, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
    }
  };

  request.onerror = function() {
    console.log('connection error');
  };

  request.send();
}

var adjustFeatureWidth = function (element) {
  element = element || '.feature-title:visible';
  var containerWidth = $(element).parent().width();

  $(element).children('.feature-title__part').each(function () {
    var visible = $(this).visible(true);
    if(visible) {
      $(this).attr('style', '').css({
        display: 'inline-block',
        opacity: 0
      });

      var fontSize = Math.floor(containerWidth / $(this).width() * 100);

      $(this).css({
        'font-size': fontSize + '%',
        display: 'block',
        opacity: 1
      });
    }
  });
}

$(document).ready( function () {

  $("form").submit( function (e) {
    e.preventDefault();
  });

  // Randomizing alignment of little images non-setup
  var pageW = $('.page__content').width();
  $('.page__content img:not(.align-center)').each( function () {
    if($(this).parent().is('.align-left, .align-right')) {
      console.log('class r/l detected!')
    } else {
      var random_boolean = Math.random() >= 0.5;
      var imgW = $(this).width();
      var imgsize = imgW*100/740;
      if(imgsize<50){ // -70%
        var classImg = random_boolean === true ? 'align-left' : 'align-right';
        $(this).addClass(classImg);
      } else {
        $(this).addClass('align-center');
      }
    }
  });

  // Display all categories & posts if hash is here
  var hash = window.location.hash.substr(1);
  if(hash) {
    $('.remove.'+hash).each( function (){
      $(this).removeClass('remove');
    })
  }

  // On click on tag / cat on archives pages, display the good pages
  $(document).on('click', '.page__taxonomy-archives', function() {

    var hash = $(this).attr('id').replace('get-', '');

    // Hide remove
    $('.archive__subtitle:not(.remove), .list__item:not(.remove)').each( function (){
      $(this).addClass('remove');
    })

    // Display posts
    $('.remove.'+hash).each( function (){
      $(this).removeClass('remove');
    })

    location.hash = "#" + hash;
    adjustFeatureWidth();

  })

  adjustFeatureWidth();

  // Sticky footer
  var bumpIt = function () {
    $('body').css('margin-bottom', $('.page__footer').outerHeight(true));
  },
  didResize = false;

  bumpIt();

  $(window).resize( function () {
    adjustFeatureWidth();
    didResize = true;
  });

  $(window).scroll(function () {
    adjustFeatureWidth();
  });

  setInterval( function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  $('#main').fitVids();

  // Follow menu drop down
  $('.author__urls-wrapper button').on('click', function () {
    $('.author__urls').toggleClass('is--visible');
    $('.author__urls-wrapper button').toggleClass('open');
  });

  // Init smooth scroll
  $('a').smoothScroll({offset: -20});

  // Add lightbox class to all image links
  $('a[href$=\'.jpg\'],a[href$=\'.jpeg\'],a[href$=\'.JPG\'],a[href$=\'.png\'],a[href$=\'.gif\']').addClass('image-popup');

  // Magnific-Popup options
  $('.image-popup').magnificPopup({
    // DisableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        // Just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  adjustFeatureWidth();
});
