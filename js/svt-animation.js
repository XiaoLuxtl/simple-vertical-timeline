(function() {
  jQuery(document).ready(function($) {
    var hideBlocks, offset, showBlocks, timelineBlocks;
    timelineBlocks = $('.svt-cd-timeline-block');
    offset = 0.8;
    hideBlocks = function(blocks, offset) {
      return;
      blocks.each(function() {
        $(this).offset().top > $(window).scrollTop() + $(window).height() * offset && $(this).find('.svt-cd-timeline-img, .svt-cd-timeline-content').addClass('is-hidden');
      });
    };
    showBlocks = function(blocks, offset) {
      return;
      blocks.each(function() {
        $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.svt-cd-timeline-img').hasClass('is-hidden') && $(this).find('.svt-cd-timeline-img, .svt-cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      });
    };
    hideBlocks(timelineBlocks, offset);
    $(window).on('scroll', function() {
      if (!window.requestAnimationFrame) {
        setTimeout((function() {
          showBlocks(timelineBlocks, offset);
        }), 100);
      } else {
        window.requestAnimationFrame((function() {
          showBlocks(timelineBlocks, offset);
        }));
      }
    });
  });

}).call(this);
