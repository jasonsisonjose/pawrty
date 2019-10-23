(function(window){

  var PROFILE_PIC_SELECTOR = '[data-image="thumbnail"]';
  var PROFILES_SELECTOR = '[data-id = "id"]';
  var PROFILE_LIST_SELECTOR = '[data-list="main-dog-list"]';

  var SERVER_URL = "http://localhost:2403/";
  var App = window.App;

  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;

  var URL_EXTENSION = 'profile';
  var FULL_URL = SERVER_URL + URL_EXTENSION;


  var remoteDS = new RemoteDataStore(FULL_URL);


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

// function populatePage(FULL_URL){
//
//   this.serverUrl = FULL_URL;
//   RemoteDataStore.prototype.getAll = function (cb) {
//     $.get(this.serverUrl, function (serverResponse) {
//       console.log(serverResponse);
//       cb(serverResponse);
//     });
//   };
// }

// populatePage(FULL_URL);
initializeEvents();
})(window);
