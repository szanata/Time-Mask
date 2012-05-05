/**
 * Time Mask Plugin
 * 
 * @version 1
 * 
 * @licensed MIT <http://szanata.com/MIT.txt>
 * @licensed GPL <http://szanata.com/GPL.txt>
 * 
 * @requires jQuery 1.4.x
 * 
 * @author Stéfano Stypulkowski <http://szanata.com>
 */
(function ($){
  
  $.fn.timeMask = function (){

    var
      tester = new RegExp('^([0-1][0-9]|2[0-3]):[0-5][0-9]$|^([0-1][0-9]|2[0-3]):[0-5]$|^([0-1][0-9]|2[0-3]):$|^([0-1][0-9]|2[0-3])$|^([0-1]|2)$'),
      matcher = new RegExp('([0-1][0-9]|2[0-3]):[0-5][0-9]|([0-1][0-9]|2[0-3]):[0-5]|([0-1][0-9]|2[0-3]):|([0-1][0-9]|2[0-3])|([0-1]|2)','g'),
      events = /.*MSIE 8.*|.*MSIE 7.*|.*MSIE 6.*|.*MSIE 5.*/.test(navigator.userAgent) ? 'keyup propertychange paste' : 'input paste';
            
    function handler(e){
      var self = $(e.currentTarget);
      if (self.val() !== e.data.ov){
        if (!tester.test(self.val())){
          var r = self.val().match(matcher);
          self.val(r === null ? '' : r[0]);
        }
        ov = e.data.ov = self.val();
      }
    }

    $(this)
      .attr('maxlength', 5)
      .bind(events,{ov:$(this).val()},handler);
  }
})(jQuery);