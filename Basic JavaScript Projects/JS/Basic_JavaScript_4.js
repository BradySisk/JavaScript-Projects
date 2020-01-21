function my_Dictionary () {
    var car ={
        Make:"Ford",
        Color:"Black",
        Model:"F150",
        Year:2019,
        
    };
    delete car.Make;
    document.getElementById("Dictionary").innerHTML = car.Make;
    }
