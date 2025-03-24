

let query = "<select name='month'>"
for(i=1 ; i<=12 ; i++){
    query+= `<option value='${i}'>${i}월</option>`
}query += `</select>`

document.querySelector("#box1").innerHTML = query;
//한번에 쿼리문을 전달