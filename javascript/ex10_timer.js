// let timerid = setTimeout(function(){
// console.log("3초 후 출력")
// },3000) //3초 후 딱 한번만 실행

let n = 0;
let timerid2 = setInterval(function(){
    console.log(n++);
},1000)
setTimeout(function(){
    clearInterval(timerid2);
    console.log(timerid2+"중지됨")
},5000)
