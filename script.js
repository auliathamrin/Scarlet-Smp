particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true},
color:{value:"#00ffff"}
}

});

function openQR(){

document.getElementById("popup").style.display="flex";

document.getElementById("popup-body").innerHTML=`

<h2>QRIS</h2>

<img src="qris.png">

`;

}

function openDana(){

let number="085163626042";

document.getElementById("popup").style.display="flex";

document.getElementById("popup-body").innerHTML=`

<h2>DANA</h2>

<p>${number}</p>

<button class="copy-btn" onclick="copyNum('${number}')">
Copy Nomor
</button>

`;

}

function openGopay(){

let number="085117192531";

document.getElementById("popup").style.display="flex";

document.getElementById("popup-body").innerHTML=`

<h2>GoPay</h2>

<p>${number}</p>

<button class="copy-btn" onclick="copyNum('${number}')">
Copy Nomor
</button>

`;

}

function copyNum(num){

navigator.clipboard.writeText(num);

let toast=document.getElementById("toast");

toast.style.display="block";

setTimeout(()=>{
toast.style.display="none";
},2000);

}

function closePopup(){
document.getElementById("popup").style.display="none";
}