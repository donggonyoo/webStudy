function createTable(){
    let row = document.querySelector("#row").value;
    let cols = document.querySelector("#cols").value;

    let qu = `<table border=1><tr>`

    for(i=1 ; i<=(row*cols) ; i++){
        qu+=`<td>${i}</td>`;
        if(i % cols ==0){
            qu+=`</tr><tr>`
        }
    }
    qu+=`</tr></table>`

    document.querySelector("#box").innerHTML += qu;
}