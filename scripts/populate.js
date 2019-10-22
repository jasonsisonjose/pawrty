(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function Populate(selector) {
    if (!selector) {
      throw new Error ('no selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error ('Could not find element with selecotr: ' + selector);
    }
  }

  Populate.prototype.makeProfileCard = function () {
    var newProfileCard = new ProfileCard ();

    this.$element.append(ProfileCard.$element);
  };

  function ProfileCard (selector) {
    this.$element = $(selector);

    var $li = $('<li></li>', {
      'class': 'dog-profile'
    });
    var $img =$('<img></img>', {
      'class': 'dog-image',
      'data-image': 'thumbnail',
      src : 'imgs/good_boi.jpg'
    });
    var $profileName = $('<h4></h4>', {
      'class' : 'dog-name',
      value : 'Testing McGee'
    });

    $li.append($img);
    $li.append($profileName);
    this.$element = $li;
  }

  App.Populate = Populate;
  window.App = App;
})(window);
