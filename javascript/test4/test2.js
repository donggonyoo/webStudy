function reverseTest(){
    let a = document.querySelector("#stringla1").textContent.split(" ").reverse();
    let b = document.querySelector("#stringla2").textContent.split(" ").reverse();

    let aconb  = a.concat(b); //a b를 붙인 후 새로운배열로반환
    let total=''; // 문자를 담아놓을 변수
    for(i in aconb){
        total+= aconb[i];
    };

    document.querySelector("#print").innerHTML += total
}