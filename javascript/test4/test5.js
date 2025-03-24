
function showDiv(t){
   console.log(t.id) //해당id를 확인해보기
document.getElementById(`${t.id}Box`).style.display = "block";
//id+Box의 이름을 가진 div를 display = 'block'으로변경
}