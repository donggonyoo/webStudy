function accessId(){
    //divEl : <div id="area1"..></div>태그 객체 요소(Element) 
    const divEl = document.getElementById('area1');
    divEl.innerHTML += "아이디로 접근완료<br>"
    divEl.style.fontWeight = "bold";
//자바스크립트에서의 CSS는 '-'방식이 아닌 Camel방식으로구분함
    //함수 작동(버튼 클릭) 시 style적용

    //현재배경색이 red--> yellow -->red-->,....
    if( divEl.style.backgroundColor== "red"){
        divEl.style.backgroundColor = "yellow";
        divEl.style.color= "black";
    }
    else if(divEl.style.backgroundColor =="yellow" ){
        divEl.style.backgroundColor ="red"; 
        divEl.style.color="white"
    
    }

    //divEl태그의 크기변경 + overflow
    divEl.style.width="200px";
    divEl.style.height="100px";
    divEl.style.overflow = "auto";
}

//---------------------태그이름 이용-------------------------------

function accessTagName(){
    const liEl = document.getElementsByTagName("li");
    //li태그는 여러개이므로 배열로 조회 될것임
    //innerHTML 이라는 속성이 존재하지않음
    //배열에 값을 넣듯  인덱스번호로 넣어야함

    //타입과 갯수 확인
    console.log(liEl, typeof(liEl));
    console.log("li요소의 갯수 ",liEl.length);

    let blueColor = 30;
    for(let i=0 ; i<liEl.length ; i++){
        liEl[i].innerHTML = (i+1);
        liEl[i].style.backgroundColor = 
            "rgb(200,125,"+blueColor+")";
        blueColor+=40;
        //루프를돌수록 글씨가 진해짐(blue색상)
    }
}

//------------------------name 속성이용--------------------------

function accessName(){
    //getElementsByName('속성값')
    //현재페이지에서 name속성값을 가진 모든요소조회(배열)
    const hobby=document.getElementsByName('hobby');//배열
    const divEl = document.getElementById('area3');//요소객체
    let ho =" "; //문장을 쌓아둘 변수

    for(let i = 0; i<hobby.length; i++){
        //checked : checkbox선택 여부
        if(hobby[i].checked){
           ho += hobby[i].id + "<br>"
        }
    }
    //쌓아둔 문장을 innerHTML로 넣는다
    divEl.innerHTML = ho; 
}

//---------------------class로접근--------------------------
function  accessClass(){
    const arr = document.getElementsByClassName("test");
    for(let i=0 ; i<arr.length ; i++){
        console.log(arr[i]);
    }
}

//-------------------선택자이용------------------
function accessSelector(){
    const divEl = document.querySelector("#test2");
    const divEl2 = document.querySelector(".test2>h2");//하위한개만
    const divEl3 = document.querySelectorAll(".test2>h2");//배열객체로전달
    const divEl4 = document.querySelectorAll(".test2");
    console.log("테스트1 "+divEl.innerHTML);
    console.log("테스트2 "+divEl2.innerHTML);
    for(let i =0 ; i<divEl3.length ; i++){
        console.log("테스트3 "+divEl3[i].innerHTML);
    }
    for(let i =0 ; i<divEl4.length ; i++){
        console.log("테스트4 "+divEl4[i].innerHTML);
    }
    
    
}