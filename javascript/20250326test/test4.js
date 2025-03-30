// function test1(){
//     let prom = prompt("메세지를 입력하세요");
//     if(prom.length ==0 ){
//         alert("메시지가 입력되지않았어요")
//     }
//     else{
//         document.querySelector("#test1").innerHTML = prom;
//     }
// }
let but = document.getElementsByTagName("button")[0];
but.onclick = function(){
    let prom = prompt("메세지를 입력하세요");
    if(prom.length ==0 ){
        alert("메시지가 입력되지않았어요")
    }
    else{
        document.querySelector("#test1").innerHTML = prom;
    }
}
//-----------------------------------------------------------------------

function test2(){
    let con = confirm("개인정보 동의?");
    if(con){ //con은 확인 :true 반환 // 취소 : false 반환
        $("#test2").html("개인정보가유출"); //jQuery방식
// document.querySelector("#test2").innerHTML = "개인정보유출"
    }
    else{
        $("#test2").html("당신의 개인정보 유출을 막았습니다"); 

    }
}
//-----------------------------------------------------------------------
function test3(){
    let arr = [];
    while(arr.length <= 10){
        let ran =parseInt((Math.random()*100)+1);
        console.log(ran)
        if(arr.includes(ran)){//중복숫자 방지
            break;
        }
        else{
            arr.push(ran);
        } 
    }
   arr.sort((a,b)=>{return -1*(a - b)});
   //배열은 숫자로 정렬이 제대로되지않음(아스키코드)
   let u = document.querySelector("#test3>ul");
   document.ul.appendChild()
   for(let i=0 ; i<arr.length ; i++){
    u.innerHTML += `<li>${arr[i]}</li>`
   }
}
//-----------------------------------------------------------------------
function test4(){
    let imText = document.querySelector("input[name='img']").value;
    document.querySelector(".img-container").innerHTML+=
    (`<img src='${imText}' witdth="200" height="200">`);

    //jQuery방식
    // let imText = $("input[name='img']").val();
    // $(".img-container")
    // .html(`<img src='${imText}' witdth="200" height="200">`);
}
//-----------------------------------------------------------------------
function test5(){
    let data = document.querySelectorAll(".data-container>*");
    let result = document.querySelector("#checkStr");
    //.data-container>* : class(data-container)태그의 모든 자식태그
   for(i=0 ; i<data.length ; i++){
    if(data[i].innerHTML.length >=3){
    //  result.innerHTML += data[i].innerHTML+" ";
    //  result.appendChild(data[i])


     //복제할요소객체.cloneNode(논리값) : 복제된요소객체
     let copy = data[i].cloneNode(true); 
     // true : textNode까지 모두복제 / false : elementNode만복제
     result.appendChild(copy);//#checkStr의 하위에 집어넣기
    }
   } 
}

