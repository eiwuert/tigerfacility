app.controller("mainCtrl", function ($scope,$uibModal) {

    $(window).scroll(function(e){ 
        var $el = $('#sticky'); 
        var isPositionFixed = ($el.css('position') == 'fixed');
        if ($(this).scrollTop() > 500 && !isPositionFixed){ 
            $el.addClass('fixedElement');
        }
        if ($(this).scrollTop() < 500 && isPositionFixed){
            $el.removeClass('fixedElement');
        } 
    });

    $scope.toTop = function() {
        $('html, body').animate({scrollTop:0}, 'slow');
    }

    $scope.openVideo = function() {
        $uibModal.open({
            templateUrl: 'pages/videomodal.html',
            controller: 'customDialogCtrl',
            size: 'lg',
        });
    }

    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
          }
        });
    }).scroll();
});