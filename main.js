$(document).ready(function(){
    $("#img1").on('click',function(){
        $("#img1").replaceWith($("#img4"));
      });

      $("#img2").on('click',function(){
        $("#img2").replaceWith($("#img5"));
      });

      $("#img3").on('click',function(){
        $("#img3").replaceWith($("#img6"));  
      });
});