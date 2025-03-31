function calculator(e){
    let a = $("#num1").val();
    let b = $("#num2").val();
    console.log( typeof a) //String타입임
    numA = parseInt(a); //String+String = String 이므로
    numB = parseInt(b); //정수로변환하자
    
    $("span#result").html(eval(numA+e+numB));

    console.log(e);//버튼에따라 계속 바뀔것임

    // switch(e){//switch문으로 해당연산을 수행하게함
    //     case '+' : $("span").html((numA+numB));break;
    //     case '-' : $("span").html((numA-numB));break;
    //     case 'x' : $("span").html((numA*numB));break;
    //     case '/' : $("span").html((numA/numB));break;
    //     case '%' : $("span").html((numA%numB));break;
    // }
}