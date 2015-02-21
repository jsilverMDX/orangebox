OrangeBox = {

  lockBody: function() {
    $('body').css("width", "100%");
    $('body').css("height", "100%");
    $('body').css('overflow', 'hidden');
  },

  showMsg: function(options) {
    if($('.orangeBox').size() == 0){
      $('body').prepend(Blaze.toHTML(Template.orangebox))
    }
    $('.orangeBoxWindow').css("display", "block");
    $('.overlay').show();
    $('.orangeBox').addClass("orangeBox-show");
    $('.orangeBoxText').html(options['msg']);
    $('.orangeCloseButton').click(this.hideMsg);
    var buttons = options["buttons"]
    if(buttons!=null){
      _.map(buttons, function(val, key){
        var buttonName = key;
        var buttonCallback = val;
        var buttonClass = buttonName.toLowerCase().replace(/[^\w]/gi, '')
        $('ul.orangeBoxButtons').append("<li><span class='" + buttonClass + "'>"+buttonName+"</span></li>");
        $('.'+buttonClass).click(buttonCallback);
      });
    }
    if(options["noClose"] == true) {
      $('.orangeCloseButton').remove();
    }
    if(options["keyup"]!=null){
      $(window).keyup(options["keyup"]);
    }
    this.lockBody();
    var boxHeight = $('.orangeBox').outerHeight();
    $('.orangeBox').css('margin-top', "-" + boxHeight / 2 + "px");
  },

  hideMsg: function() {
    $(window).keyup(null);
    $('body').css("width", "");
    $('body').css("height", "");
    $('body').css('overflow', '');
    $('.orangeBox').removeClass("orangeBox-show");
    $('.orangeBoxWindow').css("display", "none");
    $('.overlay').hide();
    $('ul.orangeBoxButtons').html("");
    $('.orangeBox').remove();
    $('.overlay').remove();
  }

}