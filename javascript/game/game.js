//--------------------------------사람이 움직이는 코드------------------------
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


//캐릭터 선택 시
function character(e){
    console.log(e);
    document.querySelector("#human").src = e;
    $("#tab").css({display:"none"}) //캐릭터창none처리
    $("#ex").css({display:"block"}) 
   
    $("#goMain").click(function(){ //게임화면으로 버튼 클릭 시
        $("#sel").css("display", "none")//설명창 none처리
        $("#main").css({display:"block"})  //메인의 화면을 나타나게
        $("#startAndHuman").css({display:"block"})// start버튼이 다시 나타나게
    })
}

$(document).ready(function() { //HTML문서가 모두 불러와진 후
    const $human = $("#human");//사람 jqeury객체로변환
    const $main = $("#main");//게임배경 jqeury객체로변환

    const mainWidth = $main.width();  // #main의 너비
    const humanWidth = $human.width(); // #human의 너비

    // 초반 위치를 중앙에 설정
    let positionX = (mainWidth - humanWidth) / 2 ; 
    //아이콘의크기까지생각
    const step = 15; // 한 번에 이동할 거리

    // 초기 위치 적용
    $human.css({ left: positionX + "px" });

    $(document).keydown(function(event) {
        if (event.key === "ArrowLeft") {
            if (positionX > -100) { // 왼쪽 경계 체크
                positionX -= step;
            }
        }
        if (event.key === "ArrowRight") {
            if (positionX < mainWidth - humanWidth - 100) { // 오른쪽 경계 체크
                positionX += step;
            }
        }
        // 이동 적용
        $human.css({ left: positionX + "px" });
    });
});

//-------------------------장애물 생성코드-------------------------------


function start(){
    cm = setInterval(createMode,600); //0.8초마다 데이터추가
    mm = setInterval(moveMode,60); //60ms마다 이동
    setInterval(function(){ //게임시간
        $("#gameTime").html(gameTime--);  
    },1000)

};


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

function createMode(){
    icons.push(new MovingIcons());
}
function random(num){ // 0<= x <num의 정수
    let num1 = Math.random()*num;
    return  parseInt(num1);
}

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
function humanState(a){
    if(a){
        $("#human").css({ border: "1px solid green"});
        //+점수얻었을 경우 green테두리
    }
    else{
        $("#human").css({ border: "1px solid red"});
        //-점수얻었을 경우 red테두리
    }
    setTimeout(function(){
        $("#human").css({ border: "none"});
        },400);//0.4초 후 원상태복구  
}

function moveMode(){
    for(let i in icons){//words배열의 크기만큼 루프
        icons[i].move(); //y축변화
        $human = $("#human"); //사람(캐릭터)을 jQuery객체변환
        console.log(icons[i].h5.querySelector("i"))
        let $icon = $(icons[i].h5); // jQuery 객체로 변환
        //충돌했다면 함수는 false를 반환할것임
        if(isColliding($icon,$human)){
            let iconFind = icons[i].h5.querySelector("i");
            //switch(true) : case조건에 true가 되는지 확인할수있음
            //contains("a")의결과는 ture | false
            switch(true){
                case iconFind.classList.contains("fa-wand-magic-sparkles") : {
                    humanState(true);total+=5;}break;
                case iconFind.classList.contains("fa-star") : total+=3;break;
                case iconFind.classList.contains("fa-thumbs-up") : total+=1;break;

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
            delete(icons[i]); //객체를 완전히삭제해준다
            $("#score").html("점수 : "+(total));     
        }

        if(icons[i].y >= canvasHeight ){ //바닥에닿은경우 icon없애기
            document.querySelector("#main").removeChild(icons[i].h5);
            delete(icons[i]);
        }
        if(total<= -10){
            alert("점수미달로 인한 강제종료")
            clearInterval(cm); //숫자만들기종료
            clearInterval(mm); // 이동종료
            alert("초기화면으로돌아갑니다")
            location.reload();
            return;
        }

        if(gameTime==0 ){ //0초
            alert("TIME OVER")
            clearInterval(cm); //숫자만들기종료
            clearInterval(mm); // 이동종료
            if(total>=50){
                alert("you WIN!!"+"your score:"+total)
            }
            else if(total<50){
                alert("YOU LOSE"+"your score:"+total)

            }
            alert("초기화면으로돌아갑니다")
            location.reload();
            return;
        }
        
    }
}










