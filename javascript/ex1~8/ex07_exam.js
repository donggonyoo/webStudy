

function start(){
    let num1 = parseInt(Math.random()*10);
    let num2 = parseInt(Math.random()*10);

    let op = ['+','-','/','*','%'];
    let  a = op[Math.floor(Math.random()*op.length)];
    // 배열[소수점버림(0~1사이의 실수 * 5)]
    //즉 0~4 사이의 숫자가 나오게될것임(배열은 4번인덱스까지만존재)

    let str = num1 + a +num2;
    
    let result  = prompt(`결과값을 입력해주세요${str} `);
    let result2 = eval(str)

    if(result == result2){
        document.writeln("<div style=color:blue>정답</div>")
    }
    else{
        document.writeln("<div style=color:red> 오답</div>")
        document.writeln(`입력값 : ${result} 정답은 ${result2}`)

    }
}