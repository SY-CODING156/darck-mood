var button = document.getElementById('button');
var body = document.getElementById('body');
var div = document.getElementById('div');
var h1 = document.getElementById('h1');

body.style.backgroundColor = "white";
div.style.backgroundColor = "rgb(148, 148, 148)";
h1.style.color = "black";

button.onclick = function botton(){
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "rgb(77, 77, 77)";
    }else{
        body.style.backgroundColor = "white";
    }
    if(div.style.backgroundColor == "rgb(148, 148, 148)"){
        div.style.backgroundColor = "black";
    }else{
        div.style.backgroundColor = "rgb(148, 148, 148)";
    }
    if(h1.style.color == "black"){
        h1.style.color = "white";
    }else{
        h1.style.color = "black";
    }
}