function dong(){
    let money = document.getElementById('money').value;
    let a = document.getElementById('tax').value = Math.round(money*0.1);
    alert("부가세 : "+a);


}