$(document).ready(function (){
  $(".des").click(function() {
    $("#p1").toggle();
   });

   $(".dev").click(function() {
      $("#p2").toggle();
   });

   $(".prod").click(function() {
      $("#p3").toggle();
   });

   $("#pic8").hover(function (){
         $('.last').toggleClass("show")
      });

      $("#pic7").hover(function (){
         $('.seventh').toggleClass("show")
      }); 

      $("#pic6").hover(function (){
         $('.sixth').toggleClass("show")
      });

   $("#pic5").hover(function (){
         $('.fifth').toggleClass("show")
      });

      $("#pic4").hover(function (){
         $('.fourth').toggleClass("show")
      });

   $("#pic3").hover(function (){
        $('.third').toggleClass("show")
      });

   $("#pic2").hover(function (){
        $('.second').toggleClass("show")
      });

   $("#pic1").hover(function (){
      $('.first').toggleClass("show")
     });

   $('.btn').click((e)=>{
   
   var name=$('#NAME').val();
   var email=$('#EMAIL').val();
   var comment=$('#COMMENT').val();
   if(name!=='' || name==null || email!==empty || email!==null || comment!==empty){
      alert(`Hey ${name}, We have received your email we will get back to you shortly`)
   }
   }
   )
   });






























