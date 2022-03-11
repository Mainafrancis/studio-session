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