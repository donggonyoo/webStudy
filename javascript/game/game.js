//--------------------------------사람이 움직이는 코드------------------------
let gameTime=60;
let star =  $("<i></i>").addClass("fa-solid fa-star")
let ddong = $("<i></i>").addClass("fa-solid fa-poo")
let bomb = $("<i></i>").addClass("fa-solid fa-bomb")
let good = $("<i></i>").addClass("fa-solid fa-thumbs-up")
let bad = $("<i></i>").addClass("fa-solid fa-thumbs-down")
let magic = $("<i></i>").addClass("fa-solid fa-wand-magic-sparkles")
let arr = [star,ddong,bomb,good,bad,magic];
let canvasWidth = 950;
let canvasHeight= 760;
let total=0;
let icons =[];


function character(e){
    console.log(e);
    document.querySelector("#human").src = e;
    $("#tab").css({display:"none"}) //캐릭터창none처리
   

   let ex = setInterval(function(){
        $("#ex").css({display:"block"})     
        setTimeout(function(){
            clearInterval(ex);
            $("#sel").css("display", "none")
            $("#main").css({display:"block"})  //메인의화면을 나타나게
            $("#func").css({display:"block"})// start버튼이 다시 나타나게
        },3000); //3초뒤에 해당함수를 종료시킨 후 배경을 none처리함
    },100)
}



$(document).ready(function() {
    const $human = $("#human");
    const $main = $("#main");

    const mainWidth = $main.width();  // #main의 너비
    const humanWidth = $human.width(); // #human의 너비

    // 초반 위치를 중앙에 설정
    let positionX = (mainWidth - humanWidth) / 2 ; 
    //아이콘의크기까지생각
    const step = 10; // 한 번에 이동할 거리

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
    cm = setInterval(createMode,1000); //2초마다 데이터추가
    mm = setInterval(moveMode,100); //0.5초마다 이동
    setInterval(function(){
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

function moveMode(){
    for(let i in icons){//words배열의 크기만큼 루프
        icons[i].move(); //y축변화
        $human = $("#human"); //사람(캐릭터)을 jQuery객체변환
        console.log(icons[i].h5.querySelector("i"))
        let $icon = $(icons[i].h5); // jQuery 객체로 변환
        if(icons[i].y >= canvasHeight ){ //바닥에닿은경우  
            document.querySelector("#main").removeChild(icons[i].h5);
            delete(icons[i]);
        }
        if(gameTime==58){ //0초되면 종료
            alert("게임종료!!!")
            clearInterval(cm); //숫자만들기종료
            clearInterval(mm); // 이동종료
        if(confirm("게임을 다시시작하실건가요?")){
                location.reload();
            }
        }

        //충돌 시 

        if( !isColliding($icon,$human)){
            let iconFind = icons[i].h5.querySelector("i");
            
            if(iconFind.classList.contains("fa-star")){
                document.querySelector("#main").removeChild(icons[i].h5);
                delete(icons[i]);
                total += 3;
                $("#score").html("점수 : "+(total));   
                
            }
           
        }
        
    }
}

 //충돌감지 함수  true : 겹치지않음 false: 겹침
function isColliding($icon, $human) { 
   
    let iconRect = $icon[0].getBoundingClientRect();
    //getBoundingClientRect();요소의위치정보를 가져옴
    let humanRect = $human[0].getBoundingClientRect();

    return( //겹치지않는조건들 
        iconRect.bottom < humanRect.top ||   // 아이콘이 사람 위쪽에 완전히 있음
        iconRect.top > humanRect.bottom ||   // 아이콘이 사람 아래쪽에 완전히 있음
        iconRect.right < humanRect.left ||   // 아이콘이 사람 왼쪽에 완전히 있음
        iconRect.left > humanRect.right      // 아이콘이 사람 오른쪽에 완전히 있음
    );
}//충돌감지함수



function createMode(){
    console.log("실행")
    icons.push(new MovingIcons());
}

function randomDate(){ //배열에서 랜덤하게뽑을것임
    let num = parseInt(Math.random()*4); //0~3인덱스
    return arr[num].prop("outerHTML");
}

function random(num){
    let num1 = Math.random()*num;
    return  parseInt(num1);
}








