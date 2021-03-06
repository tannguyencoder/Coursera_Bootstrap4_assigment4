$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1000 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").removeClass('btn-danger');
            $("#carousel-button").children("span").addClass('fa-play');
            $("#carousel-button").addClass('btn-success');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").removeClass('btn-success');
            $("#carousel-button").children("span").addClass('fa-pause');    
            $("#carousel-button").addClass('btn-danger');                
        }
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
    $("#reserveButton").click(function(){
        $("#retableModal").modal('show');
    });
});