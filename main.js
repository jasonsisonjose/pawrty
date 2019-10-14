var PROFILE_PIC_SELECTOR = '[data-image="thumbnail"]';

function getThumbnailArray () {
  'use strict';
  var thumbnails = document.querySelectorAll(PROFILE_PIC_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function addClickHandler(thumbnail) {
  'use strict';
  thumbnail.addEventListener('click', function(eventTriggered) {
    // this prevents it from loading in a new page
    eventTriggered.preventDefault();
    console.log("Picture is pressed");
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailArray();
  thumbnails.forEach(addClickHandler);
}

initializeEvents();
