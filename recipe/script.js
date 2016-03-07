$(document).ready(function() {
  console.log("Script included!");


$(function(){
   $(".hide-photos").click(function () {
      $(this).text(function(i, text){
          return text === "SHOW PHOTOS" ? "HIDE PHOTOS" : "SHOW PHOTOS";
      })

      $('.step-img').toggle('fast');
   });
})

 $('li').click(function(){
 

 			$(this).toggleClass('checked');

 });

 $('.steps').click(function(){
 

 			$(this).toggleClass('strike');

 });
  
});