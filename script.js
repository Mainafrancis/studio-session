$(document).ready(function(){
    
    $("#desImg").slideDown('1500').hide('1000');
    $("#desText").slideDown('1500').hide('1000');
    $("#design").show('1500');
});
$("#design").click(function(){
    $("#design").slideUp('1500');
    $("#desImg").slideDown('1500');
    $("#desText").slideDown('1500');
});
$("#devImg").click(function(){
    $("#devImg").slideDown('1500').hide('1000');
    $("#devText").slideDown('1500').hide('1000');
    $("#development").show('1500');
});
$("#development").click(function(){
    $("#development").slideUp('1500');
    $("#devImg").slideDown('1500');
    $("#devText").slideDown('1500');
});
$("#prodImg").click(function(){
    $("#prodImg").slideDown('1500').hide('1000');
    $("#prodText").slideDown('1500').hide('1000');
    $("#prod-management").show('1500');
});
$("#prod-management").click(function(){
    $("#prod-management").slideUp('1500');
    $("#prodImg").slideDown('1500');
    $("#prodText").slideDown('1500');
});
//   portfolio
$('.portImg').hover(function(){
    $('.porttext',this).slideToggle('slow');
}, function(){
        $('.porttext',this).slideToggle('slow');   
});
