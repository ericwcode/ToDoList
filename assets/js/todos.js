// Check off todos by clicking

$("li").click(function(){
    //if li is gray
    if ($(this).css("color") === "rgb(128, 128, 128)"){
        //turn black
        console.log("its gray. turn black");
        $(this).css("color", "green"); 
    }
  
    //else 
        //turn gray
    $(this).css({
        color: "gray",
        textDecoration: "line-through"
        }
    );
    
});