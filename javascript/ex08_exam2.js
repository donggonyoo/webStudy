let box = `<table><tr>`
for(i=0 ; i<10 ; i++){
    box+=`<td><img src="./nums/num${i}.jpg" height=50px></td>`
}box+=`</tr></table>`

document.querySelector("#box1").innerHTML = box;



let box2='<h1>방법2</h1>';
for(i=0 ; i<10 ; i++){
    box2+=`<img src="./nums/num${i}.jpg" height=40px><br>`
}
document.querySelector("#box2").innerHTML = box2;
