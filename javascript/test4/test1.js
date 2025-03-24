function arrayTest(){
    let la1 = document.querySelector("#la1").textContent.split(",");
    let la2 = document.querySelector("#la2").textContent.split(",");
    let la3 = document.querySelector("#la3").textContent.split(",");
    let la4 = document.querySelector("#la4").textContent.split(",");

    let total = la1.concat(la2).concat(la3).concat(la4);

    let text = document.getElementById("text").value;
    if(total.indexOf(text) == -1){
        alert(text+'존재X');
    }
    else{
        alert(text+"는"+total.indexOf(text)+"번에 존재합니다");
    }
    
   
}
