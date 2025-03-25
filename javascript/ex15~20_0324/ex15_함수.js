function test1(){
    document.querySelector("#area1").innerHTML +="test1함수호출됨 <br>"
}

document.getElementById("btn").onclick = function(){
    document.getElementById("area2").innerHTML += "이벤트핸들러 통해 실행<br>";
}
// document.getElementById("btn").onclick = ()=>
//     document.getElementById("area2").innerHTML +="이벤트핸들러 통해 실행<br>";

function test2(value){
    console.log(arguments) //매개변수 정보 저장객체
    document.getElementById("area3").innerHTML = arguments[0]+"<br>";
    document.getElementById("area3").innerHTML += arguments[1]+"<br>";
    document.getElementById("area3").innerHTML += value+"<br>";
}

function ran(){
    return parseInt(Math.random()*100+1);
    //1~100사이의 랜덤값 구해서 반환
    /* 반환(return)설명
        1)반환타입의 선언이 없다
        2) return 키워드로 함수를 종료함 함수의끝(})이 실행되면 함수종료
        3) 값을 반환해야하는경우
         (1) return 값;
         (2) return 함수();

    */
}

function test5(){
    const inputEl = document.getElementById("userName");
    return function(){
        confirm(inputEl.value+"이 맞으신가요?");
    }
}