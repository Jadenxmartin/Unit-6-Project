$("button").click(function(){
 var name = $(".name").val();

 

 var money = $(".money").val();
 var moneyNumber = parseInt(money);
 
    
   
 var job = $(".job").val();
   

    var output = "in the year 2050 " + name + " will have $" +  moneyNumber * 5 + " but your job is not " + job + " but a bissness owner" ;
    $(".results").append(output);
});

