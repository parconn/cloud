$(function(){
    gnbClickEvent();
});

function gnbClickEvent(){
    $('.gnb .dep1').on('click', function(){
        $(".collapse").collapse('hide');
    });
}