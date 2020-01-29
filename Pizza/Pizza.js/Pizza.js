function getReceipt() {

    var text1 = "<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal=0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }else if (selectedSize === "MEGA SIZED PIZZA") {
        sizeTotal = 32;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+" .00");
    console.log("size text1: "+text1);
    console.log("subtotal:  $" +runningTotal+" .00");

    getMeat (runningTotal,text1);
    };

    function getMeat(runningTotal,text1) {
        var meatTotal = 0;
        var selectedMeat = [];
        var meatArray = document.getElementsByClassName("meats");
        for (var j = 0; j < meatArray.length; j++) {
            if (meatArray[j].checked) {
                selectedMeat.push(meatArray[j].value);
                console.log("selected meat item: ("+meatArray[j].value+")");
                text1 = text1+meatArray[j].value+"<br>";
            }
        }
        var meatCount = selectedMeat.length;
        if (meatCount > 1) {
            meatTotal = (meatCount - 1);
        }else {
            meatTotal = 0;
        }
        runningTotal = (runningTotal + meatTotal);
        console.log("total selected meat items: "+meatCount);
        console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+" .00");
        console.log("meat text1: "+text1);
        console.log("Purchase Total: "+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"
            +runningTotal+".00"+"</strong></h3>";
    };
 
    function getTopping(runningTotal,text1) {
        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");
        for (var j = 0; j < toppingArray.length; j++) {
            if (toppingArray[j].checked) {
                selectedTopping.push(toppingArray[j].value);
                console.log("selected topping item: ("+toppingArray[j].value+")");
                text1 = text1+toppingArray[j].value+"<br>";
            }
        }
        var toppingCount = selectedTopping.length;
        if (toppingCount > 1) {
            toppingTotal = (toppingCount - 1);
        } else {
            toppingTotal = 0;
        }
        runningTotal = (runningTotal + toppingTotal);
        console.log("total selected topping items: "+toppingCount);
        console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
        console.log("topping text1: "+text1);
        console.log("Purchase Total: "+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    };	