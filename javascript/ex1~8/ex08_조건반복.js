let kor = document.querySelector("#kor").textContent;
let eng = document.querySelector("#eng").textContent;
let math =document.querySelector("#math").textContent;
let average = (Number(kor)+Number(eng)+Number(math))/3;
document.querySelector("#average").textContent = average;
let grade;
// if(average>=90){grade = 'A';}
// else if(average>=70){grade = 'B';}
// else if(average>=70){grade = 'c';}
// else{grade = 'F';}

switch(true){//js 에서는 case구문에 비교연산이 가능함함
    case average>=90 : grade = 'A'; break;
    case average>=80 : grade = 'B'; break;
    case average>=70 : grade = 'C';break;
    case average>=60 : grade = 'D'; break;
    default : grade = 'F';
}
document.querySelector("#grade").textContent = grade;

//-----------------반복==========================

let n = 1;
while(n<=5){
    document.querySelector("#box1").innerHTML += (n + "&nbsp;&nbsp;");
    n++;
}

for(n = 1 ; n<=5 ; n++){
    document.querySelector("#box2").innerHTML += (n + "&nbsp;&nbsp;");
}

n=1
do{//do while문의 특징은 조건에안맞아도 무조건루프가 한번은 돈다
    document.querySelector("#box3").innerHTML += (n + "&nbsp;&nbsp;");
    n++;
}
while(n<=5);

