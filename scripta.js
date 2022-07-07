var count = 0;






var clicked = document.getElementById('a').addEventListener('click',  functiona,  false);

function functiona() {
count ++;
//count --;
document.getElementById('c').innerHTML = count;

if (count >= 3  && count <= 6) {                                                              // stricter

document.getElementById('c').style.color = "steelblue";

}

else if (count >=7  && count <= 10 ) {

document.getElementById('c').style.color = "red";


}

else if (count >=11  && count <= 15 ) {

document.getElementById('c').style.color = "yellow";


}

else if (count >=16  && count <= 20 ) {

document.getElementById('c').style.color = "orange";


}
else {

greeting = document.getElementById('c').style.color ="black";                                     // Reset  Zero/Color


}

}










var reset = document.getElementById('b').addEventListener('click',  functionb,  false);

function functionb() {

count = 0;
greeting = document.getElementById('c').innerHTML = count;
greeting = document.getElementById('c').style.color ="black";



}
