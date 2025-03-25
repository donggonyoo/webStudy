function stringTest(){
    const divEl = document.querySelector("#area1");
    let str1 = "Hello World";
    divEl.innerHTML = "str1 : "+str1+"<br>";
    divEl.innerHTML+=`toUpperCase(): ${str1.toUpperCase()}<br>`;
    //' 가 아니라 백틱(`) 로 사용(~쪽 버튼에있음)
    divEl.innerHTML += `toLowerCase() : ${str1.toLowerCase()}<br>`

    for(let i=0 ; i<str1.length ; i++){
        divEl.innerHTML+= `${i}번쨰 문자 : ${str1.charAt(i)}<br>`
    }

    //indexof : 문자의 위치리턴
    str1 = "Hello World";
    divEl.innerHTML += "<h3>indexOf</h3>"
    divEl.innerHTML += "str1 : "+str1+"<br>";
    divEl.innerHTML += `문자열의 길이 : ${str1.length}<br>`
    divEl.innerHTML += `앞에서부터 첫 l의위치 : ${str1.indexOf('l')}<br>`
    divEl.innerHTML += `뒤에서부터 첫 l의위치 : ${str1.lastIndexOf('l')}<br>`
    divEl.innerHTML += `a문자의 위치(존재X) : ${str1.indexOf('a')}<br>`
    
    //부분문자열 : substring(시작인덱스,종료인덱스-1)
    //              substr(시작인덱스,글자수)
    divEl.innerHTML += "<h3>부분문자열</h3>"
    divEl.innerHTML +=`substring(시작인덱스) : ${str1.substring(6)}<br>`
    divEl.innerHTML +=`substring(시작인덱스,끝+1) : ${str1.substring(6,9)}<br>`
    divEl.innerHTML +=`substr(시작인덱스) : ${str1.substr(6)}<br>`
    divEl.innerHTML +=`substr(시작,글자수) : ${str1.substr(1,4)}<br>`

    //startsWith , endsWith
    divEl.innerHTML += "<h3>startsWith , endsWith</h3>"
    divEl.innerHTML +=`startsWith('H')로 시작? : ${str1.startsWith('H')}<br>`
    divEl.innerHTML +=`endsWith('d'')로 끝? : ${str1.endsWith('d')}<br>`

    //문자의 치환
    divEl.innerHTML += "<h3>replace(치환)</h3>"
    let str2 = "JavaJavaJavaJavaJavaJava"
    divEl.innerHTML += "str2원본 : "+str2+"<br>";
    divEl.innerHTML += `replace(원본,치환):${str2.replace('Java','자바')}<br>`;
    //없는 문자를 입력 시 아무일도일어나지않는다.
    divEl.innerHTML += `replaceAll(원본,치환):${str2.replaceAll('Java','자바')}<br>`;

    //문자열의 분리
    divEl.innerHTML += "<h3>문자열의 분리</h3>"
    let str3 = "사과 바나나 복숭아 키위"
    let fruits = str3.split(" "); //배열 (" "을 기준으로 나눔)
    divEl.innerHTML += `fruits의자료형  ${typeof(fruits)}<br>`
    divEl.innerHTML += `fruits의 크기 ${str3.length}<br>`

    for(let i =0 ; i< fruits.length ; i++){
        divEl.innerHTML += fruits[i]+"<br>"
    }
     divEl.innerHTML += `배열요소를 하나의 문자열로 : ${fruits.join("-")}<br>`



}