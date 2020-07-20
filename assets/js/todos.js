// Check off todos by clicking

// $("li").click(function(){
//     //if li is gray
//     if ($(this).css("color") === "rgb(128, 128, 128)"){
//         //turn black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });

//     }
  
//     //else 
//         //turn gray
//     else {$(this).css({
//         color: "gray",
//         textDecoration: "line-through"
//         }
//     )};
    
// });


$("li").click(function(){
    $(this).toggleClass("completed");
});