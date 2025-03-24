function concatTest(){
    const area11  = document.querySelector("#area1");
    const arr1 = ["사과","딸기"]
    const arr2 = ["자동차","비행기","오토바이"]
    area11.innerHTML = "arr1 : "+arr1 + "<br>";
    area11.innerHTML += "arr2 : "+arr2 +"<br>";
    area11.innerHTML += "arr1.concat(arr2) : "+arr1.concat(arr2)+"<br>";
    area11.innerHTML += "arr1: "+arr1+"<br>";// arr1배열객체에 변화X
    let arr3 = arr1.concat(arr2,[1,2,3]); // 새로운배열에 저장
    area11.innerHTML += "arr3 : "+arr3+"<br>";
}

function reverseTest(){
    const divEl = document.getElementById("area2");
    const arr = [1,2,3,4,5];
    divEl.innerHTML = "arr : "+arr+"<br>";
    divEl.innerHTML += "reverse : "+arr.reverse() + "<br>";
    divEl.innerHTML += "arr : "+arr; 
    //reverse는 arr객체에 변화를준다.(새로운배열에 저장할필요없음)
}

function sortTest(){
    const divEl = document.getElementById("area3");
    const arr = ["홍길동","김삿갓","유재석","하하","박명수","이이경"];
    divEl.innerHTML = "arr : "+arr+"<br>";
    divEl.innerHTML += "arr.sort() : "+arr.sort() + "<br>";
    divEl.innerHTML += "arr : "+arr+"<br>"; //원본배열변경
    //내림차순 정렬
    divEl.innerHTML += "arr.sort().reverse() : "+arr.sort().reverse() + "<br>";

    const arr2 = [30,21,101,18,1,201,40,7];
    divEl.innerHTML += "arr2 sort : "+arr2.sort() +"<br>"
    //배열내의 요소들을 문자열로 변경해 아스키코드문자 순서대로정렬함.;
    //숫자 크기로 정렬이안됨
    divEl.innerHTML+= "arr2 오름차순정렬 : "+
        arr2.sort(function(left,right){return left-right})+"<br>"
        //자바의방식(L-R :  음수 : 앞 , 양수 : 뒤)

    divEl.innerHTML+= "arr2 내림차순정렬 : "+
    arr2.sort(function(left,right){return -1*(left-right)})+"<br>"  
}

function pushPopTest(){
    const divEl = document.querySelector("#area4");
    const arr = ["서초동","우장산동","역삼동","가산동","방배동"];
    divEl.innerHTML = "arr : "+arr +"<br>";
    divEl.innerHTML += "arr에 데이터추가 후 배열크기 : "+arr.push("신도림동")+"<br>";
    divEl.innerHTML += "arr : "+arr +"<br>";
    arr.push("잠실본동");
    arr.push("마곡동");
    /*
        push(값) : 배열에 값을 추가 . 배열의 크기 리턴
    */
    divEl.innerHTML +="arr.push('잠실본동') arr.push('마곡동')<br>"
    divEl.innerHTML +="arr : "+arr+"<br>";
    divEl.innerHTML +="pop : "+arr.pop()+"<br>";
    divEl.innerHTML +="arr : "+arr+"<br>";
    arr.pop(); arr.pop(); arr.pop(); 
    divEl.innerHTML += "arr.pop()*3 :  : "+arr;
}

function shiftUnshiftTest(){
    const divEl = document.querySelector("#area5");
    const arr = ["당구","야구","볼링","테니스"];
    divEl.innerHTML = "arr : "+arr +"<br>"
    arr.unshift("농구");//맨앞에 추가
    divEl.innerHTML += "unshift 후 : "+arr+"<br>";
    divEl.innerHTML += "unshift('탁구') 후 크기 : "+arr.unshift("탁구")+"<br>";
    let del = arr.shift();//맨앞의 요소를 제거,리턴
    divEl.innerHTML += "제거시킨 요소 : "+del +"<br>";
    divEl.innerHTML += "arr: "+arr +"<br>";
}

function sliceSpliceTest(){
    const divEl = document.getElementById("area6");
    const arr = ["Java","Oracle","HTML","CSS","JavaScript"];
    divEl.innerHTML = "arr : "+arr +"<br>";
    divEl.innerHTML += "<b>arr.slice(2,4): </b>"
                    +arr.slice(2,4) +"<br>";
                    //2번인덱스~3번인덱스까지추출해 반환

    divEl.innerHTML += "arr : "+arr +"<br>";
    //원본배열에 영향을 끼치진않음

    divEl.innerHTML += "<b>arr.splice(2,2,'spring','MyBatis')</b> "
        +arr.splice(2,2,"spring","MyBatis")+"<br>"
        //2번인덱스부터 2개의 인덱스를 다음과같이 변경
        // 배열.splice(시작인덱스,제거수,[추가할 값]) 배열의 요소제거 및 추가

    divEl.innerHTML +="arr : "+arr+"<br>";
    //원본배열에 영향을 끼침
    
    //Oracle을 MariaDB로 변경해보시오
    divEl.innerHTML += "<b>arr.splice(arr.indexOf('Oracle'),1,'MariaDB')</b>"
        +arr.splice(arr.indexOf("Oracle"),1,'MariaDB')+"<br>"
    divEl.innerHTML += "arr : "+arr+"<br>"
}