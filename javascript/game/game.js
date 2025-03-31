//--------------------------------사람이 움직이는 코드------------------------
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
            if (positionX > -78) { // 왼쪽 경계 체크
                positionX -= step;
            }
        }
        if (event.key === "ArrowRight") {
            if (positionX < mainWidth - humanWidth) { // 오른쪽 경계 체크
                positionX += step;
            }
        }
        // 이동 적용
        $human.css({ left: positionX + "px" });
    });
});

//-------------------------장애물 생성코드-------------------------------
let star =  $("<i></i>").addClass("fa-solid fa-star");
let ddong = $("<i></i>").addClass("fa-solid fa-poo");
let bomb = $("<i></i>").addClass("fa-solid fa-bomb");
let good = $("<li></li>").addClass("fa-solid fa-thumbs-up");
let arr = [star,ddong,bomb,good];
let canvasWidth = 1000;
let canvasHeight= 800;
let cnt=0;
let icons =[];

$("#start").click = function(){
    cm = setInterval(createMode,2000); //2초마다 데이터추가
    mm = setInterval(moveMode,500); //0.5초마다 이동
}

function MovingIcons(){
    this.h5 = document.createElement('h5');
    this.h5.innerHTML = randomDate();
    this.x = random(canvasWidth); //랜덤한너비
    this.y = 0;
    this.vY = 10; // 단어이동의 간격
    this.h5.style.position = 'absolute';
    this.h5.style.left = this.x +'px';
    this.h5.width= 100;
    this.h5.height= 100;
// this.h3.style.color = colors[random(6)]; //0~5번인덱스의 랜덤한 색깔
    document.querySelector("#main").appendChild(this.h5);
    //#main 하위에 h3를 넣는다
}

//icon 떨어뜨리기
MovingIcons.prototype.move = function(){
    if((this.x+this.h3.innerHTML.length)>canvasWidth){
        this.x=canvasWidth-(this.h3.innerHTML.length+1);
    }
    this.y += this.vY; //y축변화주기
    this.h3.style.top = this.y +'px'; //y축간격 적용
};


function createMode(){
    words.push(new MovingChar());
}

function randomDate(){ //배열에서 랜덤하게뽑을것임
    let num = parseInt(Math.random()*4); //0~3인덱스
    return arr[num];
}








