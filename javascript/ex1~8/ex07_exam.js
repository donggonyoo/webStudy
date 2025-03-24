

function start(){
    let num1 = parseInt(Math.random()*10);
    let num2 = parseInt(Math.random()*10);

    let op = ['+','-','/','*','%'];
    let  a = op[Math.floor(Math.random()*op.length)];

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