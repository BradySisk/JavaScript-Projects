function Ride_Function() {
    var Height,can_ride;
    Height = document.getElementById("Height").value;
    Can_ride =(Height < 52) ? "you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function count_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 22;
        function Plus_five() {Starting_point += 5;}
        Plus_five();
        return Starting_point;
    }
}

function Vote_Function(){
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are to young to vote" : "You are able";
    document.getElementById("vote").innerHTML = Can_vote +" to vote."; 
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    }

    var myDaughter = new Person ("Ana", "Sisk", 5, "brown");

document.getElementById("New_and_This").innerHTML ="My daughter is" + myDaughter.age  + ".";
