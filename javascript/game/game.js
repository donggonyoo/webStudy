let gameTime=30; //게임시간
let star =  $("<i></i>").addClass("fa-solid fa-star")
let ddong = $("<i></i>").addClass("fa-solid fa-poo")
let bomb = $("<i></i>").addClass("fa-solid fa-bomb")
let good = $("<i></i>").addClass("fa-solid fa-thumbs-up")
let bad = $("<i></i>").addClass("fa-solid fa-thumbs-down")
let magic = $("<i></i>").addClass("fa-solid fa-wand-magic-sparkles")
let arr = [star,ddong,bomb,good,bad,magic];
let canvasWidth = 1200;
let canvasHeight= 830;
let total=0;
let icons =[];
let speed;
let iconSpeed;


//캐릭터 선택 시
function character(e){
    document.querySelector("#human").src = e;
    $("#sel>#tab").css({display:"none"}) //캐릭터창none처리
    $("#sel>#ex").css({display:"block"}) 
   
    $("#goMain").click(function(){ //게임화면으로 버튼 클릭 시
        level(); //게임 레벨(아이콘속도,캐릭터속도)
        ready(); //캐릭터생성
        $("#sel").css("display", "none")//설명창 none처리
        $("#main").css({display:"block"})  //메인의 화면을 나타나게
        $("#startAndHuman").css({display:"block"})// start버튼이 다시 나타나게
    })
}

function level(){
    let level = $("#level").val();
    switch(level){
        case "one" : {iconSpeed = 55; speed=13;}break;
        case "two" : {iconSpeed = 45; speed=18;}break;
        case "three" :{ iconSpeed = 35; speed=22;}break;
        case "four" : { iconSpeed = 11; speed=60;}break;
    }
}

function ready() { //HTML문서가 모두 불러와진 후
    const $human = $("#human");//사람 jqeury객체로변환
    const $main = $("#main");//게임배경 jqeury객체로변환

    const mainWidth = $main.width();  // #main의 너비
    const humanWidth = $human.width(); // #human의 너비

    // 초반 위치를 중앙에 설정
    let positionX = (mainWidth - humanWidth) / 2 ; 
    $human.css({ left: positionX + "px" });

    const step = speed; // 한 번에 이동할 거리
    $(document).keydown(function(event) {
        if (event.key === "ArrowLeft") {
            if (positionX > -170) { // 왼쪽 경계 체크
                positionX -= step;
            }
        }
        if (event.key === "ArrowRight") {
            if (positionX < mainWidth - humanWidth -190) { // 오른쪽 경계 체크
                positionX += step;
            }
        }
        // 이동 적용
        $human.css({ left: positionX + "px" });
    });
};




//-------------------------장애물 생성코드-------------------------------


function random(num){ // 0<= x <num의 정수
    let num1 = Math.random()*num;
    return  parseInt(num1);
}

function MovingIcons(){
    this.h5 = document.createElement('h5');
    let iconElement = arr[random(6)].clone(); // jQuery 객체 복사
    this.h5.appendChild(iconElement[0]);  //h5의 하위에 넣기
    this.x = random(canvasWidth); //랜덤한너비
    this.y = 0;
    this.vY = 15; // 단어이동의 간격
    this.h5.style.position = 'absolute';
    this.h5.style.left = this.x +'px';
    this.h5.width= 100;
    this.h5.height= 100;
// this.h5.style.color = colors[random(4)]; //0~3번인덱스의 랜덤한 색깔
    document.querySelector("#main").appendChild(this.h5);
    //#main 하위에 h5를 넣는다
}

//icon 떨어뜨리기
MovingIcons.prototype.move = function(){
    if((this.x+this.h5.innerHTML.length)>canvasWidth){
        this.x=canvasWidth-(this.h5.innerHTML.length+1);
    }
    this.y += this.vY; //y축변화주기
    this.h5.style.top = this.y +'px'; //y축간격 적용
};




 //충돌감지 함수  true : 겹치지않음 false: 겹침
function isColliding($icon, $human) { 
    let iconRect = $icon[0].getBoundingClientRect();
    //getBoundingClientRect();요소의위치정보를 가져옴
    let humanRect = $human[0].getBoundingClientRect();
    return( //  not(겹치지않는조건들)
       !(iconRect.bottom < humanRect.top ||   // 아이콘이 사람 위쪽에 완전히 있음
        iconRect.top > humanRect.bottom ||   // 아이콘이 사람 아래쪽에 완전히 있음
        iconRect.right < humanRect.left ||   // 아이콘이 사람 왼쪽에 완전히 있음
        iconRect.left > humanRect.right )     // 아이콘이 사람 오른쪽에 완전히 있음 
    );
}

function humanState(a){//캐릭터의 경계에 테두리
    if(a){
        $("#human").css({ border: "3px solid green"});
        //+점수얻었을 경우 green테두리
    }
    else{
        $("#human").css({ border: "3px solid red"});
        //-점수얻었을 경우 red테두리
    }
    setTimeout(function(){
        $("#human").css({ border: "none"});
        },400);//0.4초 후 원상태복구  
}

function moveMode(){ //게임진행관련
    for(let i in icons){
        icons[i].move(); //아이콘의움직임
        $human = $("#human"); //사람(캐릭터)을 jQuery객체변환
        let $icon = $(icons[i].h5); // jQuery 객체로 변환
        //충돌했다면 함수는 false를 반환할것임
        if(isColliding($icon,$human)){
            let iconFind = icons[i].h5.querySelector("i");
            //switch(true) : case조건에 true가 되는지 확인할수있음
            //contains("a")의결과는 ture | false
            switch(true){
                case iconFind.classList.contains("fa-wand-magic-sparkles") : {
                    humanState(true);total+=5;}break;
                case iconFind.classList.contains("fa-star") : {
                    humanState(true);total+=3;}break;
                case iconFind.classList.contains("fa-thumbs-up") : {
                    humanState(true);total+=1;}break;

                case iconFind.classList.contains("fa-thumbs-down") : {
                    humanState(false); total-=1;}break;

                case iconFind.classList.contains("fa-poo") :{
                    humanState(false);total-=3;}break;

                case iconFind.classList.contains("fa-bomb") :{
                    humanState(false);total-=5;}break;
                default : break;
            }
            //main에서 제거
            document.querySelector("#main").removeChild(icons[i].h5);
            icons.splice(i, 1); 
            $("#score").html("점수 : "+(total));     
        }

        if(icons[i].y >= canvasHeight ){ //바닥에닿은경우 icon없애기
            document.querySelector("#main").removeChild(icons[i].h5);
            icons.splice(i, 1); //i번쨰인덱스부터 1개를 제거함
           
        }
        if(total<= -10){
            clearInterval(cm); //숫자만들기종료
            clearInterval(mm); // 이동종료
            showGameResult("LOSEㅠㅠ"+total+"점(-10점이하 강제종료)","red");
        }

        if(gameTime==0 ){ //0초
            clearInterval(cm); //숫자만들기종료
            clearInterval(mm); // 이동종료
            if(total>=30){
               showGameResult("WIN ! !"+total+"점","green")
            }
            else if(total<30){
                showGameResult("LOSEㅠㅠ"+total+"점","red");
            }
        }
        
    }
}

function showGameResult(message, color) { //게임종료 시 
    $("#gameResult").html(message).css({
        display: "block",
        color: color // 승리: 초록, 패배: 빨강
});
    setTimeout(function () {
        location.reload(); // 3초 후 게임 재시작
    }, 3000);
}

function createMode(){
    icons.push(new MovingIcons());
}

function start(){
    cm = setInterval(createMode,300); //0.8초마다 데이터추가
    mm = setInterval(moveMode,iconSpeed); //level에 따라 바뀌는 이동속도
    setInterval(function(){ //게임시간
        $("#gameTime").html(`남은시간 : ${gameTime--}`);  
    },1000)

};










