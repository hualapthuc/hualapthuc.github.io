var listImg=['chicago.jpg','la.jpg','ny.jpg']
var index=0
document.getElementById("slider").src="img/"+listImg[index]
function slider(){
    index++;
    if(index<=2){
        document.getElementById("slider").src="img/"+listImg[index]
    }
    else{
        index=0;
        document.getElementById("slider").src="img/"+listImg[index]
    }
}
setInterval(slider,2000)