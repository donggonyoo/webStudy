data = [
    {no:1,title:"첫번째",writer:"유저1",enrolldate:`2025-03-27`},
    {no:2,title:"두번째",writer:"유저2",enrolldate:`2025-03-27`},
    {no:3,title:"세번째",writer:"유저3",enrolldate:`2025-03-27`},
    {no:4,title:"네번째",writer:"유저4",enrolldate:`2025-03-27`}
]; //전역변수로 설정한 배열

function test1(){
    let tab = document.querySelector("#data-table");
    a = `<table border=1>`;
    for(let i =0 ; i<data.length ; i++){
            a+= `<tr>`;
         for(j in data[i]){
            a+= `<td>${data[i][j]}</td>`; //열에 값 추가
         }a+= `</tr>`; //다음행으로 넘기기 
    }a+=`</table>`;

    tab.innerHTML = a;
}

function test2(){
    let no = document.querySelector("#boardNo").value;
    let ti = document.querySelector("#boardTitle").value;
    let wr = document.querySelector("#boardWriter").value;
    let da = document.querySelector("#boardDate").value;
    data.push({ no: `${no}`, title: `${ti}`, writer: `${wr}`, enrolldate: `${da}` });
    //배열.push : 뒤에추가
}