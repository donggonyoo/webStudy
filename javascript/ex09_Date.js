let box1 = document.querySelector("#box1");

let now = new Date();
box1.innerHTML += now+"<br>";

let date1 = new Date(2025,(3-1),10,15,20);
//2025-03-10 15:20 의미 (입력값+1month 의 날짜가 들어감)
box1.innerHTML += date1+"<br>";

let date2 = new Date(2025,(3-1),10);
//2025-03-10 의미 (1달뒤에 날짜가 들어감)
box1.innerHTML += date2+"<br>";

let date3 = new Date("2025-03-20 15:20");//문자열로하면 1달차이가나지않음
box1.innerHTML += date3+"<br>";

//-------------------------------보기좋게 넣기-----------------------

let year = now.getFullYear();//2025
let month = now.getMonth()+1; //getMonth는 현재 달의 -1이 반환될것임
let day = now.getDate();//20
let weekNo = now.getDay();// 0:일 ~ 6:토
let hours = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
box1.innerHTML += 
`${year}-${month}-${day} (${weekNo}) ${hours}:${minute}:${second}<br>`;


//UTC 타임기준
 year = now.getUTCFullYear();
month = now.getUTCMonth()+1; //getMonth는 현재 달의 -1이 반환될것임
 day = now.getUTCDate();//20
 weekNo = now.getUTCDay();
hours = now.getUTCHours();//UTC기준은 우리나라보다 9시간이 느림
minute = now.getUTCMinutes();
second = now.getUTCSeconds();

box1.innerHTML += 
`${year}-${month}-${day} (${weekNo}) ${hours}:${minute}:${second}<br>`;


//------------------------------------예제------------------------------

// 3월30일의 요일출력해보기
// getDay()의 반환값 -> 0:일 ~ 6:토
date = new Date(2025,2,30);
let arr= ['일','월','화','수','목','금','토']
weekName = arr[date.getDay()];
box1.innerHTML += `2025-03-30 ${weekName}요일<br>`
//오늘의 요일 출력하기


