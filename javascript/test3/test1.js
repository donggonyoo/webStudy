function calculator(a){
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let result = document.querySelector("#result");
    switch(a){
        case '+' : {result.innerHTML = (num1+num2)}; break;
        case '-' : {result.innerHTML = (num1-num2)}; break;
        case 'x' : {result.innerHTML = (num1*num2)}; break;
        case '/' : {result.innerHTML = (num1/num2)}; break;
        case '%' : {result.innerHTML = (num1%num2)}; break;
    }
}