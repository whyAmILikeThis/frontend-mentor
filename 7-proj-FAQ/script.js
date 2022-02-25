function toggleFlap(flapNum) {

    var flapBox = document.getElementById("flaps").children;    //access the children of flap
    let flapItem = flapBox.item(flapNum).children;              //access the 2nd gen children of flap
    
    if(flapItem.item(1).style.display == "block") { // if is menuBox displayed, hide it
        flapItem.item(1).style.display = "none";                //this item is content
        flapItem.item(0).style.transform = 'rotate(360deg)';    //this item is the arrow
    }
    else{ // if is menuBox hidden, display it
        flapItem.item(1).style.display = "block";               //this item is content 
        flapItem.item(0).style.transform = 'rotate(180deg)';    //this item is the arrow
    }
  }
  