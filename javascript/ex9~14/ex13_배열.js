
function arrayTest1(){
    const arr = ["홍길동",20,"서울",true ,[1,2,3]]; //배열의선언, 초기화
    console.log(arr);
    console.log(arr[2]);
    console.log(arr[4]);
    console.log(arr[4][1]);
    
}
//----------------------------------------------------------------

function arrayTest2(){
    const arr1 = new Array();//크기0의배열
    const arr2 = new Array(3);
    const arr3 = [];//크기0의배열
    console.log(arr1.length , arr2.length , arr3.length);
    console.log(arr2);
    
    //자바스크립트는 크기가 0이어도 배열에값넣기가 가능
    arr3[0] = "바나나"; 
    arr3[1] = "사과";
    arr3[9] = true;

    console.log(arr3 , arr3.length)
    //arr3배열출력하기 : 기존for구문이용
    //1 모든배열의요소가 출력 값이없는경우 undefined
    //2.일부만 조회 가능(범위설정)
    for(i=0 ; i<arr3.length ; i++){
        console.log("arr3 : ",i,":",arr3[i]);
    }

    //for in 구문
    // 1.undefined 값은 출력X
    //2. 모든요소를 조회함
    for(let i in arr3){
        console.log(`arr3[${i}]=${arr3[i]}`)
    }
}

//--------------------------------배열관련메서드-----------------------------

function indexofTest(){
    const area1 = document.querySelector("#area1");
    const arr = ["사과","딸기 ", "레드향" , "바나나","키위","한라봉"]
    const search = prompt("위치를 찾고싶은 과일명을 입력");
    let index = arr.indexOf(search);
    area1.innerHTML += `당신이 찾는과일 : ${search}은`;
    if(index == -1){
        area1.innerHTML += "없습니다<br>"
    }
    else{
         area1.innerHTML += `${index+1}번에 존재<br>`
    }
}
