//fix this and create a type of div for both the left and right pane in the future to minimize code 
//this code  can def be optimized but the issue has been resolved 

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

document.getElementById("rightpane").onmouseout = function() {
	this.style.width = '50%' ;
    this.style.transitionDuration = '0.5s' ;
    document.getElementById("leftpane").style.width = '50%';
}

document.getElementById("leftpane").onmouseout = function() {
	this.style.width = '50%' ;
    document.getElementById("rightpane").style.width = '50%';
    this.style.transitionDuration = '0.5s' ;
}


