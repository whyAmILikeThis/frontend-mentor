

function toggleFlap(flapNum) {
    
    switch (flapNum) {
        case 1:
            flapName = 'flap-content-1';
        break;
        case 2:
            flapName = 'flap-content-2';
        break;
        case 3:
            flapName = 'flap-content-3';
        break;
        case 4:
            flapName = 'flap-content-4';
        break;
        case 5:
            flapName = 'flap-content-5';
        break;
        default:
        break;
    }
    
    
    var flapBox = document.getElementById(flapName);    
    
    if(flapBox.style.display == "none") { // if is menuBox displayed, hide it
        flapBox.style.display = "block";
        //rotate the arrow down
    }
    else{ // if is menuBox hidden, display it
        flapBox.style.display = "none";
        //rotate the arrow up again
    }
  }
  