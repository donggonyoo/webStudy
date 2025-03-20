let box = '<table border=1><tr>';
for(i=1; i<10; i++){
    box+=`<td>${i}</td>`;//${}을 이용해 i값을요소에넣기
    if(i%3 ==0){//3열 마다 행을 바꿔줌
         box+=`</tr><tr>`
        } 
}
box+='</tr></table>';
//다 작성된 table태그를 한번에 
//querySelector를 이용해 div태그에 넣자
document.querySelector("#box1").innerHTML = box;






