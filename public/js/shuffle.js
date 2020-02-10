(function($) {
  $.fn.shuffle = function() {
    var randomNum;
  for (var i = 0; i < this.length; i++) {
    randomNum = Math.floor(Math.random() * this.length);
    $(this[i]).before($(this[randomNum]));
  }
  return this;
  };
})(jQuery);

$(document).ready(function() {
  $(".box-item").shuffle();
});