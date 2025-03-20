function stringLength(){
    let text1 = document.querySelector("#text1").value;
    let result1 = document.querySelector("#result1");
    result1.innerHTML += `<h4>보기의 문자열의
     길이는${text1.length}</h4>`
}

function stringSplit(){
    let la1 =document.querySelector("#la1").textContent;
    let result2 = document.querySelector("#result2");
    let arr = la1.split(",");//,을 기준으로 배열을 만듬
    console.log(arr , typeof(arr))
     for(i=0 ; i<arr.length ; i++){
         result2.innerHTML+= `${i+1} . ${arr[i]}<br>`
    }
}


