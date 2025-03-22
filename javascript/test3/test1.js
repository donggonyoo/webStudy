function calculator(a){
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let result = document.querySelector("#result");
    //switch문을 이용해 num1과 num2에대해 버튼에 따라 다른 연산을하도록
    //(a) : 이벤트가 발생한 객체의value
    switch(a){
        case '+' : {result.innerHTML = (num1+num2)}; break;
        case '-' : {result.innerHTML = (num1-num2)}; break;
        case 'x' : {result.innerHTML = (num1*num2)}; break;
        case '/' : {result.innerHTML = (num1/num2)}; break;
        case '%' : {result.innerHTML = (num1%num2)}; break;
    }
}