$(".color").click(function() {
    $("body").css("background-color","yellow");
});
    $(".shotButton").click(function(){
        var shotInput = $(".shooting").val();
            if(shotInput=== "Curry"){    
        
    // display this text if the answer is correct
    $(".shotMessage").text("Correct!");
    } else{
    // display this text if the answer is incorrect
    $(".shotMessage").text("Wrong! Try again.");}
    
});