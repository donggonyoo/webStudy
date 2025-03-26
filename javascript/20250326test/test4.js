function test1(){
    let prom = prompt("메세지를 입력하세요");
    if(prom.length ==0 ){
        alert("메시지가 입력되지않았어요")
    }
    else{
        document.querySelector("#test1").innerHTML = prom;
    }
}

function test2(){
    let con = confirm("개인정보 동의?");
    if(con){ //con은 확인 :true 반환 // 취소 : false 반환
        document.querySelector("#test2").innerHTML = "개인정보가유출";
    }
    else{
        document.querySelector("#test2").innerHTML = "당신의 개인정보 유출을 막았습니다";

    }
}

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
   arr.sort((left,right)=>{return -1*(left - right)});
   //배열은 숫자로 정렬이 제대로되지않음(아스키코드)
   let u = document.querySelector("#test3>ul");
   for(let i=0 ; i<arr.length ; i++){
    u.innerHTML += `<li>${arr[i]}</li>`
   }
}

function test4(){
    let imText = document.querySelector("input[name='img']").value;
}

