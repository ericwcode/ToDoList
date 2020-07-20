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

// Check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();

});

//listener on input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //get text from input
        let todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li> <span>X</span> " + todoText + "</li>")
        
    }
    
});