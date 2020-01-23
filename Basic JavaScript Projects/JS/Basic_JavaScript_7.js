function Add_numbers(){ 
   var x = 50;
    document.write(100 + x +"<br>");
}
Add_numbers();
var v = 100;
function Add_numbers1(){ 
    
     document.write(100 + v +"<br>");
}
Add_numbers1();

 function get_Date() {
     if (new Date().getHours() < 18) {
         document.getElementById("Greeting").innerHTML = "How are you today?";
     }
 }
 
 function Age_Function() {
    Age= document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to party!!!!";
    }
    else {
        Drink = "You are not old enough to do party :(";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
 }



 function Time_function() {
     var Time = new Date().getHours();
     var Reply;
     if (Time < 12 == Time > 0) {
         Reply = "It is morning time!";
     }
     else if (Time > 12 == Time < 18) {
         Reply = "It is the afternoon.";
     }
     else {
         Reply = "It is evening time.";
     }
     document.getElementById("Time_of_day").innerHTMl = Reply;
 }
 

