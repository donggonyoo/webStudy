function mathTest(){

    const divEl = document.querySelector("#area1");
    divEl.innerHTML += `<h3>Math</h3>`
    divEl.innerHTML += `절대값 : ${Math.abs(-123)}<br>`
    divEl.innerHTML += `랜덤값 : ${Math.random()}<br>`
    divEl.innerHTML += `랜덤값(1~10정수) : ${parseInt(Math.random()*10)+1}<br>`
    divEl.innerHTML += `반올림 : ${Math.round(123.533)}<br>`
    divEl.innerHTML += 
        `반올림(위치지정 불가능) : ${Math.round(123.563,2)}<br>`;
    divEl.innerHTML += `버림 : ${Math.floor(123.631)}<br>`
    divEl.innerHTML += `올림 : ${Math.ceil(123.001)}<br>`
}

//-------------------------산술-------------------------------
function arithmetic(){
    const divEl = document.querySelector("#area2")
    divEl.innerHTML = `test1:${7+7}<br>`//14
    divEl.innerHTML += `test2:${7+"7"}<br>`//77
    divEl.innerHTML += `test3:${"7"+7}<br>`//77
    divEl.innerHTML += `test4:${"7"+7+7}<br>`//777
    divEl.innerHTML += `test5:${"7" - 7}<br>`//0
    divEl.innerHTML += `test6:${"7" / 14}<br>`//0.5
    divEl.innerHTML += `test7:${"7" * "7"}<br>`//14
/*
        문자열과 숫자간 : 덧셈 외의 산술연산은 가능
        문자열이 자동형변환된 후 산술연산 진행
        덧셈연산(+) : 문자열 연결결
*/
/*
        형변환 함수
        숫자 <= Number(문자열) : 숫자형이아닌경우 NaN 리턴
        정수형숫자 <= parseInt(문자열) : 숫자만 찾아 리턴
        실수형숫자 <= parseFloat(문자열) : 숫자만찾아리턴
*/
   divEl.innerHTML += `test8 : ${7+ Number("7")}<br>`
   divEl.innerHTML += `test9 : ${7+ parseInt("7")}<br>`
   divEl.innerHTML += `test10 : ${7+ parseFloat("7")}<br>`
   divEl.innerHTML += `test11 : ${7+ parseFloat("7.5")}<br>`
   divEl.innerHTML += `test12 : ${7+ "1.234원"}<br>`//71.234 원
   divEl.innerHTML += `test13 : ${7+ Number("1.234원")}<br>`//NaN
   divEl.innerHTML += `test14 : ${7+ parseInt("1.234원")}<br>`//8
   divEl.innerHTML += `test15 : ${7+ parseFloat("1.234원")}<br>`//8.234

//eval 함수 : 사용하지 않는것을 권장함
// 문자열을 수식으로 인식. 결과 리턴
   let str = "100 + 20 * 3";
   divEl.innerHTML+= `test16: ${eval(str)}<br>`
}