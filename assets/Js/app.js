var modal= document.getElementById("myModal");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img=[];
var span=[];

for (var i = 0; i < 9; i++){
	img[i]= document.getElementsByClassName("showImg")[i];
	img[i].addEventListener('click', show);
}

function show(){
	modal.style.display= "block";
	modalImg.src= this.src;
	captionText.innerHTML= this.alt;
}


for (var i = 0; i < 9; i++){
	span[i]= document.getElementsByClassName("closeImg")[i];
	span[i].addEventListener("click", close);
}

function close(){
	modal.style.display= "none";
}



