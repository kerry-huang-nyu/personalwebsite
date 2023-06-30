//fix this and create a type of div for both the left and right pane in the future to minimize code 

document.getElementById("leftpane").onmouseover = function() {
	this.style.width = '90%' ;
    this.style.transitionDuration = '0.5s' ;
    document.getElementById("rightpane").style.width = '10%';
}

document.getElementById("rightpane").onmouseover = function() {
	this.style.width = '90%' ;
    this.style.transitionDuration = '0.5s' ;
    document.getElementById("leftpane").style.width = '10%';
}


//you need to change this to repond to on mouse out events on all pane elements 
document.getElementsByClassName("pane").onmouseout = function(){
    const collection = document.getElementsByClassName("pane");
    for (let i = 0; i < collection.length; i ++){
        collection[i].style.backgroundColor = "red";
    }
    document.getElementById("leftpane").style.width = '50%';
    document.getElementById("rightpane").style.width = '50%';
    this.style.backgroundColor = 'red';
    this.style.transitionDuration = '0.5s' ;
}



