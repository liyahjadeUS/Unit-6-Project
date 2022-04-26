//6.8- Do-now -hide all the other parts of the story except the start
$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".Ending-yes").hide();

//6.8 Do-Now When we click the yes button make part two yes show up and start of the story hide
$(".yes-button").click(function() {
$(".Part-two-yes").show();
$(".start").hide();
});

//6.8 Do-Now- When we click the no button make part two no show up and the start of the story hide
$(".no-button").click(function() {
$(".Part-two-no").show();
$(".start").hide();
});

//6.9 Do-Now Use another event than click 
$(".secondImage").hover(function() {
$(".Ending-yes").show();
$(".Part-two-yes").hide();
});

//6.9 Do-Now Use .css or.text at the end of the story 
$("").hover(function() {
$("").css();
$("").text();   

});









  

