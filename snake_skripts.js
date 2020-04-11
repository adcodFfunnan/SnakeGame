$(document).ready(function(){
var randum_za_duzinu;var randum_za_sirinu;var osigurac_za_sirinu=1;var osigurac_za_duzinu=1;
var duzina_crvena=$(window).width()-84;var sirina_crvena=$(window).height()-84;
duzina_crvena=duzina_crvena-(duzina_crvena%21);sirina_crvena=sirina_crvena-(sirina_crvena%21);
var drawing=document.getElementById("drawing"); var press_OK=0;
var sllika=document.getElementById("sllika");
drawing.width=duzina_crvena;drawing.height=sirina_crvena;
if(drawing.getContext){
var context=drawing.getContext("2d");
context.fillStyle="#FF0000";
context.fillRect(0,0,duzina_crvena-1,sirina_crvena-1);
}
if(sllika.getContext){
var contextt=sllika.getContext("2d");
contextt.fillStyle="#000000";
contextt.fillRect(0,0,20,20);
var image = document.createElement("img");
image.src =sllika.toDataURL();
}

$("#drawing").css({'position':'absolute','left':'42px','top':'42px'});
var koljeno1=0;var game;
var niz_pozicija=new Array(30);var brojac_niza_pozicija;var t;
niz_pozicija[0]=15*21;
niz_pozicija[1]=8*21;
niz_pozicija[2]=4*21;
for(brojac_niza_pozicija=2;brojac_niza_pozicija<Math.floor($(window).width()/21);brojac_niza_pozicija++){
niz_pozicija[brojac_niza_pozicija]=(brojac_niza_pozicija+1)*21;

if(niz_pozicija[brojac_niza_pozicija]>=duzina_crvena+42 && osigurac_za_duzinu==1){
randum_za_duzinu=brojac_niza_pozicija-1;osigurac_za_duzinu=0;

}
if(niz_pozicija[brojac_niza_pozicija]>=sirina_crvena+42 && osigurac_za_sirinu==1){
randum_za_sirinu=brojac_niza_pozicija-1;osigurac_za_sirinu=0;
}
}
var pomjeranje_po_top=0;var koljeno;var osigurac_klase_vertik_horizont;
var osigurac_klase;var osigurac_klase1;var osigurac_klase2;var osigurac_klase3=0;var osigurac_klase4;var osigurac_klase5;var osigurac_klase6; var osigurac_klase7;var brojac_kockica=5;
var korak_left;osigurac_left=1;osigurac_top=0;var brojac_slike;var i;var r;
var korak_top;var kretnja_naprijed;
var slike=new Array(31);var left=new Array(30);var top=new Array(30);var left_string=new Array(30);
var top_string=new Array(31);
for(r=0;r<brojac_kockica;r++){
left[r]=630-r*20-r;
top[r]=126;
}
for(brojac_slike=0;brojac_slike<brojac_kockica;brojac_slike++){
slike[brojac_slike]=document.createElement("img");
slike[brojac_slike].src=image.src;
slike[brojac_slike].width=20;slike[brojac_slike].height=20;
left_string[brojac_slike]=left[brojac_slike]+'px';
top_string[r]=top[r]+'px';
document.body.appendChild(slike[brojac_slike]);
$(slike[brojac_slike]).css({'position':'absolute','left':left_string[brojac_slike],'top':'126px'});
$(slike[brojac_slike]).addClass("horizontalno");
}
slike[brojac_kockica]=document.createElement("img");
slike[brojac_kockica].src=image.src;
slike[brojac_kockica].width=20;slike[brojac_kockica].height=20;
left[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_duzinu))];

top[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_sirinu))];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top_string[brojac_kockica]=top[brojac_kockica]+'px';
document.body.appendChild(slike[brojac_kockica]);
$(slike[brojac_kockica]).css({'position':'absolute','left':left_string[brojac_kockica],'top':top_string[brojac_kockica]});
$(document).keydown(function(e){
if(e.keyCode==39 && osigurac_left==1){
clearInterval(kretnja_naprijed)
$(slike[0]).removeClass("vertikalno");$(slike[0]).removeClass("vertikalno1");$(slike[0]).addClass("horizontalno");

kretnja_naprijed=setInterval(function(){
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
for(i=0;i<brojac_kockica;i++){
if($(slike[i]).hasClass("vertikalno")){
top[i]+=21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase==0 || koljeno==1){
$(slike[i]).removeClass("vertikalno");
$(slike[i]).addClass("horizontalno");
osigurac_klase=1;
osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;koljeno=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno=1;
}
}
else if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase3==0 || koljeno1==1){
$(slike[i]).removeClass("vertikalno").addClass("horizontalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=1;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno=1;
}


}
}
else if ($(slike[i]).hasClass("horizontalno")){
left[i]+=21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase1==0 || koljeno==1){
koljeno=0;
$(slike[i]).removeClass("horizontalno");
$(slike[i]).addClass("vertikalno");
osigurac_klase=0;osigurac_klase1=1;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
}
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase5==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=1;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
}
}
}
else if($(slike[i]).hasClass("horizontalno1")){
left[i]+=-21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase2==0 || koljeno==1){
koljeno=0;
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=1;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
}
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase6==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=1;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
}

}

}
else if($(slike[i]).hasClass("vertikalno1")){
top[i]+=-21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase4==0 || koljeno==1 ){
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=1;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}
}
else if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase7==0 || koljeno1==1){
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=1;koljeno1=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}

}
}
}

for(game=1;game<brojac_kockica;game++){
if(left[0]==left[game] && top[0]==top[game] && press_OK==0 || left[0]==(duzina_crvena+42) && press_OK==0){
press_OK=1;
alert("game is over");
window.open(" ", "_self");
}
}
if(left[0]==left[brojac_kockica] && top[0]==top[brojac_kockica]){
if($(slike[brojac_kockica-1]).hasClass("horizontalno")){
$(slike[brojac_kockica]).addClass("horizontalno");
left[brojac_kockica]=left[brojac_kockica-1]-21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno1")){
$(slike[brojac_kockica]).addClass("vertikalno1");
top[brojac_kockica]=top[brojac_kockica-1]+21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno")){
$(slike[brojac_kockica]).addClass("vertikalno");
top[brojac_kockica]=top[brojac_kockica-1]-21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("horizontalno1")){
$(slike[brojac_kockica]).addClass("horizontalno1");
left[brojac_kockica]=left[brojac_kockica-1]+21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}



brojac_kockica=brojac_kockica+1;
slike[brojac_kockica]=document.createElement("img");
slike[brojac_kockica].src=image.src;
slike[brojac_kockica].width=20;slike[brojac_kockica].height=20;
left[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_duzinu))];
top[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_sirinu))];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top_string[brojac_kockica]=top[brojac_kockica]+'px';
document.body.appendChild(slike[brojac_kockica]);
$(slike[brojac_kockica]).css({'position':'absolute','left':left_string[brojac_kockica],'top':top_string[brojac_kockica]});
}
for(i=0;i<brojac_kockica;i++){
$(slike[i]).css({'position':'absolute','left':left_string[i],'top':top_string[i]});

}
osigurac_left=0;osigurac_top=1;

},60);

}
if(e.keyCode==40 && osigurac_top==1){
clearInterval(kretnja_naprijed);
$(slike[0]).removeClass("horizontalno").addClass("vertikalno");
$(slike[0]).removeClass("horizontalno1").addClass("vertikalno");

kretnja_naprijed=setInterval(function(){
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
for(i=0;i<brojac_kockica;i++){
if($(slike[i]).hasClass("horizontalno")){
left[i]+=21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase1==0 || koljeno==1){
koljeno=0;
$(slike[i]).removeClass("horizontalno");
$(slike[i]).addClass("vertikalno");
osigurac_klase=0;osigurac_klase1=1;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
}
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase6==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=1;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
}

}
}else if ($(slike[i]).hasClass("vertikalno")){
top[i]+=21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase==0 || koljeno==1){
koljeno=0;
$(slike[i]).removeClass("vertikalno");
$(slike[i]).addClass("horizontalno");
osigurac_klase=1;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno=1;
}
}
else if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase3==0 || koljeno1==1){
$(slike[i]).removeClass("vertikalno").addClass("horizontalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=1;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno=1;
}
}
}
else if($(slike[i]).hasClass("horizontalno1")){
left[i]+=-21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase2==0 || koljeno==1){
koljeno=0;
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=1;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
} 
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase7==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=1;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
}

}
}
else if($(slike[i]).hasClass("vertikalno1")){
top[i]+=-21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase4==0 || koljeno==1){
koljeno=0;
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=1;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}
}
else if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase5==0 || koljeno1==1){
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=1;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}
}

}
}
for(game=1;game<brojac_kockica;game++){
if(left[0]==left[game] && top[0]==top[game] || top[0]==sirina_crvena+42 && press_OK==0){
press_OK=1;
alert("game is over");
window.open(" ", "_self");

}
}
if(left[0]==left[brojac_kockica] && top[0]==top[brojac_kockica]){
if($(slike[brojac_kockica-1]).hasClass("horizontalno")){
$(slike[brojac_kockica]).addClass("horizontalno");
left[brojac_kockica]=left[brojac_kockica-1]-21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno1")){
$(slike[brojac_kockica]).addClass("vertikalno1");
top[brojac_kockica]=top[brojac_kockica-1]+21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno")){
$(slike[brojac_kockica]).addClass("vertikalno");
top[brojac_kockica]=top[brojac_kockica-1]-21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("horizontalno1")){
$(slike[brojac_kockica]).addClass("horizontalno1");
left[brojac_kockica]=left[brojac_kockica-1]+21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}



brojac_kockica=brojac_kockica+1;
slike[brojac_kockica]=document.createElement("img");
slike[brojac_kockica].src=image.src;
slike[brojac_kockica].width=20;slike[brojac_kockica].height=20;
left[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_duzinu))];
top[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_sirinu))];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top_string[brojac_kockica]=top[brojac_kockica]+'px';
document.body.appendChild(slike[brojac_kockica]);
$(slike[brojac_kockica]).css({'position':'absolute','left':left_string[brojac_kockica],'top':top_string[brojac_kockica]});
}
for(i=0;i<brojac_kockica;i++){
$(slike[i]).css({'position':'absolute','left':left_string[i],'top':top_string[i]});

}
osigurac_top=0;osigurac_left=1;



},60);


}
if(e.keyCode==37 && osigurac_left==1){
clearInterval(kretnja_naprijed);
$(slike[0]).removeClass("vertikalno");$(slike[0]).removeClass("vertikalno1");
$(slike[0]).addClass("horizontalno1");

kretnja_naprijed=setInterval(function(){
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
for(i=0;i<brojac_kockica;i++){
if($(slike[i]).hasClass("horizontalno1")){
left[i]+=-21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase2==0 || koljeno==1){
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=1;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
}
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase6==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=1;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
}

}
}
else if ($(slike[i]).hasClass("horizontalno")){
left[i]+=21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase1==0 || koljeno==1){
osigurac_klase=0;osigurac_klase1=1;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno=0;
$(slike[i]).removeClass("horizontalno").addClass("vertikalno");
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
} 
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase5==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=1;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
}

}
}
else if($(slike[i]).hasClass("vertikalno")){
top[i]+=21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase==0 || koljeno1==1){
osigurac_klase=1;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
$(slike[i]).removeClass("vertikalno").addClass("horizontalno1");
if($(slike[i+1]).hasClass("horizontalno1") || $(slike[i+1]).hasClass("horizontalno")){
koljeno=1;
}
}


else if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase7==0 || koljeno==1){
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=1;koljeno=0;
$(slike[i]).removeClass("vertikalno").addClass("horizontalno");
if($(slike[i+1]).hasClass("horizontalno1") || $(slike[i+1]).hasClass("horizontalno")){
koljeno=1;
}
}
}
else if($(slike[i]).hasClass("vertikalno1")){
top[i]+=-21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase3==0 || koljeno==1){
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=1;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}
}
else if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase4==0 || koljeno1==1){
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno1");
 osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=1;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}

}

}

}
for(game=1;game<brojac_kockica;game++){
if(left[0]==left[game] && top[0]==top[game] || left[0]==21 && press_OK==0){
press_OK=1;	
alert("game is over");
window.open(" ", "_self");
}
}
if(left[0]==left[brojac_kockica] && top[0]==top[brojac_kockica]){
if($(slike[brojac_kockica-1]).hasClass("horizontalno")){
$(slike[brojac_kockica]).addClass("horizontalno");
left[brojac_kockica]=left[brojac_kockica-1]-21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno1")){
$(slike[brojac_kockica]).addClass("vertikalno1");
top[brojac_kockica]=top[brojac_kockica-1]+21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno")){
$(slike[brojac_kockica]).addClass("vertikalno");
top[brojac_kockica]=top[brojac_kockica-1]-21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("horizontalno1")){
$(slike[brojac_kockica]).addClass("horizontalno1");
left[brojac_kockica]=left[brojac_kockica-1]+21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}



brojac_kockica=brojac_kockica+1;
slike[brojac_kockica]=document.createElement("img");
slike[brojac_kockica].src=image.src;
slike[brojac_kockica].width=20;slike[brojac_kockica].height=20;
left[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_duzinu))];
top[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_sirinu))];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top_string[brojac_kockica]=top[brojac_kockica]+'px';
document.body.appendChild(slike[brojac_kockica]);
$(slike[brojac_kockica]).css({'position':'absolute','left':left_string[brojac_kockica],'top':top_string[brojac_kockica]});
}
for(i=0;i<brojac_kockica;i++){
$(slike[i]).css({'position':'absolute','left':left_string[i],'top':top_string[i]});

}
osigurac_left=0;osigurac_top=1;
},60);

}

if(e.keyCode==38 && osigurac_top==1){
clearInterval(kretnja_naprijed);
$(slike[0]).removeClass("horizontalno");$(slike[0]).removeClass("horizontalno1");$(slike[0]).addClass("vertikalno1");

kretnja_naprijed=setInterval(function(){
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;
for(i=0;i<brojac_kockica;i++){
if($(slike[i]).hasClass("horizontalno")){
left[i]+=21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase==0 || koljeno==1){
$(slike[i]).removeClass("horizontalno").addClass("vertikalno");
osigurac_klase=1;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
}
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase1==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=1;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno=1;
}
}
}
else if($(slike[i]).hasClass("vertikalno")){
top[i]+=21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase2==0 || koljeno==1){
$(slike[i]).removeClass("vertikalno").addClass("horizontalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=1;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno=1;
}
}
else if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase3==0 || koljeno1==1){
$(slike[i]).removeClass("vertikalno").addClass("horizontalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=1;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno=1;
}

}
}
else if($(slike[i]).hasClass("vertikalno1")){
top[i]+=-21;
top_string[i]=top[i]+'px';
if($(slike[i-1]).hasClass("horizontalno") && osigurac_klase6==0 || koljeno==1){
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=1;osigurac_klase7=0;koljeno=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}
}
else if($(slike[i-1]).hasClass("horizontalno1") && osigurac_klase7==0 || koljeno1==1){
$(slike[i]).removeClass("vertikalno1").addClass("horizontalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=1;koljeno1=0;
if($(slike[i+1]).hasClass("horizontalno") || $(slike[i+1]).hasClass("horizontalno1")){
koljeno1=1;
}

}
}
else if($(slike[i]).hasClass("horizontalno1")){
left[i]+=-21;
left_string[i]=left[i]+'px';
if($(slike[i-1]).hasClass("vertikalno") && osigurac_klase4==0 || koljeno==1){
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=1;osigurac_klase5=0;osigurac_klase6=0;osigurac_klase7=0;koljeno=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
}
}
else if($(slike[i-1]).hasClass("vertikalno1") && osigurac_klase5==0 || koljeno1==1){
$(slike[i]).removeClass("horizontalno1").addClass("vertikalno1");
osigurac_klase=0;osigurac_klase1=0;osigurac_klase2=0;osigurac_klase3=0;osigurac_klase4=0;osigurac_klase5=1;osigurac_klase6=0;osigurac_klase7=0;koljeno1=0;
if($(slike[i+1]).hasClass("vertikalno") || $(slike[i+1]).hasClass("vertikalno1")){
koljeno1=1;
}
}
}

}
for(game=1;game<brojac_kockica;game++){
if(left[0]==left[game] && top[0]==top[game] || top[0]==21 && press_OK==0){
press_OK=1;	
alert("game is over");
window.open(" ", "_self");
}
}
if(left[0]==left[brojac_kockica] && top[0]==top[brojac_kockica]){
if($(slike[brojac_kockica-1]).hasClass("horizontalno")){
$(slike[brojac_kockica]).addClass("horizontalno");
left[brojac_kockica]=left[brojac_kockica-1]-21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno1")){
$(slike[brojac_kockica]).addClass("vertikalno1");
top[brojac_kockica]=top[brojac_kockica-1]+21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("vertikalno")){
$(slike[brojac_kockica]).addClass("vertikalno");
top[brojac_kockica]=top[brojac_kockica-1]-21;
top_string[brojac_kockica]=top[brojac_kockica]+'px';
left[brojac_kockica]=left[brojac_kockica-1];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
}
else if($(slike[brojac_kockica-1]).hasClass("horizontalno1")){
$(slike[brojac_kockica]).addClass("horizontalno1");
left[brojac_kockica]=left[brojac_kockica-1]+21;
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top[brojac_kockica]=top[brojac_kockica-1];
top_string[brojac_kockica]=top[brojac_kockica]+'px';
}



brojac_kockica=brojac_kockica+1;
slike[brojac_kockica]=document.createElement("img");
slike[brojac_kockica].src=image.src;
slike[brojac_kockica].width=20;slike[brojac_kockica].height=20;
left[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_duzinu))];
top[brojac_kockica]=niz_pozicija[Math.floor((Math.random()*randum_za_sirinu))];
left_string[brojac_kockica]=left[brojac_kockica]+'px';
top_string[brojac_kockica]=top[brojac_kockica]+'px';
document.body.appendChild(slike[brojac_kockica]);
$(slike[brojac_kockica]).css({'position':'absolute','left':left_string[brojac_kockica],'top':top_string[brojac_kockica]});
}
for(i=0;i<brojac_kockica;i++){
$(slike[i]).css({'position':'absolute','left':left_string[i],'top':top_string[i]});

}
osigurac_top=0;osigurac_left=1;
},60);

}


});



















});