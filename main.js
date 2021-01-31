pizzas= ["Chicken Tandoori Pizza",
"Veg Supreme Pizza",
"Panner Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravanganza Pizza"];
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
pizzas.sort();

for (var i= 0; i < pizzas.length; i++) {
    htmldata = htmldata+'<li>' + pizzas[i] + '</li>';
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
pizzas.push(item);
pizzas.sort();
htmldata="<section class='cards'>"
for (var i = 0; i < pizzas.length; i++) {
    htmldata=htmldata+'<div class="card">' + pizzas[i] + '</div>';
}
htmldata=htmldata+"</section>";
console.log(htmldata);
document.getElementById("display_addmenu").innerHTML = htmldata;
}