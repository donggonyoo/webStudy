let text = document.querySelector("input[type='text']");
let but = document.querySelectorAll(" #calculator input[type='button']");

for(i=0;i<but.length;i++){ //모든루프를 돌린다
    but[i].onclick=function(){
        //모든(button)배열에 click이벤트발생시 함수를 지정
        let value = this.value;//자신의 value를 담는 변수
            if(value=='AC'){ //value가 AC면 0으로초기화
                text.value=0;
            }
            else if(value=='='){
                text.value = eval(text.value);
            }
            else{
                if(text.value==0){ 
                    //처음text의 value==0 일시
                    //내가 클릭한value로 변경
                    text.value = value;
                }
                else{
                    text.value += value;
                }
                
            }
    };
}

// but.forEach(function(button){ //모든버튼가져오기
//     button.addEventListener("click", function(){ //모든버튼에 click이벤트추가
//         let value = this.value;
//         if(value=='AC'){
//             text.value=0;
//         }
//         else if(value=='='){
//             text.value = eval(text.value);
//         }
//         else{
//             if(text.value==0){
//                 text.value = value;
//             }
//             else{
//                 text.value += value;
//             }
            
//         }
//     })
// })

