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
// contact
$("form#form").on('submit',function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();
     
    if ($("input#name").val() && $("input#email").val()){
        alert ("Hey" + name + ", Thanks for raching out to us");
    }
    else{
        alert ("Please provide your correct name and email!")
    }
})
