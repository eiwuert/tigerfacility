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

});