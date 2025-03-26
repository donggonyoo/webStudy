let trycount=0;
let nums = new Array(10);//10크기의배열 (0~9를 넣을듯)
let answer = new Array(4);//4크기의 배열(정답)
let inputArr = new Array(4);//4크기 배열(입력값)
for(let i=0; i<nums.length ; i++){
    nums[i] = i;//배열번호에 해당하는 i 대입
}

for(let a=0;a<100;a++){
    //0~9의 랜덤함숫자
    //floor : 작은 근사정수
    let ran = Math.floor(Math.random()*nums.length);
    let tmp = nums[0];
    nums[0] = nums[ran];
    nums[ran] = tmp; //100번 동안 섞는다(num배열)
}

for(let i =0 ; i<answer.length ; i++){
    answer[i] = nums[i]; // num[0~3](4개) answer에 집어넣는다
}

window.onload = function(){ //창을 띄울 떄 발생함
    for(let i = 0; i<4 ; i++){
        let img = document.createElement("img");//img태그생성
        document.querySelector("#card").append(img);
    } // card태그 내에 img 4개만듬
}

document.querySelector("#inbtn").onclick = ()=>{ //입력버튼 클릭시 발생
    let v_userNum = document.querySelector("#userNum").value;
    if(v_userNum == ""){
        alert("숫자를 입력하세요");
        document.querySelector("#userNum").focus();
        //커서가 text박스에 포커스를 두게 됨
    }
    if(isNaN(v_userNum)){
        alert("숫자타입으로입력해주세요");
        document.querySelector("#userNum").value="";
        document.querySelector("#userNum").focus();
        return;
    }
    if(v_userNum.length != 4){
        alert("4자리숫자만 입력해주세요");
        document.querySelector("#userNum").value="";
        document.querySelector("#userNum").focus();
        return;
    }
//4자리숫자를 정상적으로 입력했을 때
//inputArr : 입력값을 담을 배열(4자리숫자)
inputArr = v_userNum.split("");
for(let v1 in inputArr){ //중복숫자 검사
    let cc=0;
    for(let v2 in inputArr){
        if(inputArr[v1] == inputArr[v2]){
            cc++;
        }
    }
    if(cc>1){
        alert("중복숫자 입력불가능");
        document.querySelector("#userNum").focus();
        return;
        }
    }
//------------------
    //중복되지않은 4개의숫자 입력한 경우
    matchingNum(v_userNum); //입력숫자에대해 S,B의 갯수 or 성공여부 판단
    document.querySelector("#userNum").value="";//숫자입력 후 초기화

    /*
        keyEvent
        keydown : 키가 내려갈때
        keypress : 키를 누르고있을 떄(deprecated됨)
        keyup :  키가 올라올 때
    */
    document.querySelector("#userNum").onkeyup = (event)=>{
        //text의 value에서 enter키를 누른다면
        // 자바스크립트가  button을 클릭시킴
        if(event.keyCode==13){ //13 == enter 키
            document.querySelector("#inbtn").onclick();
        }
    
    }
    // console.log(answer);답을 console에띄움
}

function matchingNum(usernum){//입력받은숫자를 받음
    let strike = 0;
    let ball=0;
    let inputarr = usernum.split("");
    for(let i =0; i<4 ; i++){
        for(let j=0;j<4 ;j++){
            if(answer[j] == inputarr[i]){//같은숫자가 존재시
                if(i==j) { //인덱스번호가같다면
                    strike++;
                }
                else{//인덱스번호가다르다면
                    ball++;
                }
            }
        }
    }
    console.log("strike : "+strike,"ball : "+ball);

    if(strike==4){ //4S 일때 실행
        let wrap = document.getElementById("wrap");
        let h1_1 = 
        document.querySelector("#result").innerHTML += ("<h1>정답입니다</h1>")
        document.querySelector("#wrap").innerHTML += `<button>다시시작</button>`
        document.querySelector("button").onclick = ()=>{
            location.reload();//F5버튼과 같은 동작(새로고침)
        }
        cimgs = document.getElementsByTagName("img");
        //cimgs = 배열객체 (4개의img태그 저장)
        for(let i in cimgs){
             //cimgs[i](4개의이미지)에  answer[i] 이름 가진 사진넣기
            cimgs[i].src = `./nums/num${answer[i]}.jpg`;
        }
    }

    else{
        strike +="S";
        ball+= "B";
        let result_div = document.querySelector("#result");
        result_div.innerHTML += ++trycount +"번쨰 도전 : "+strike+ball
        +",유저입력값 : "+usernum+"<br>"
        if(trycount>9){//10번쨰시도가 최대임(자동 페이지 새로고침)
            alert("최대시도 초과")
            location.reload();
        }
    }
}


