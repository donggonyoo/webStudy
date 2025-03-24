
function showDiv(t){
   let s = document.querySelectorAll(".box"); 
   //class가 box인 태그를 모두가져온다
   console.log(s[0]);//확인용

   for(let i=0 ; i<s.length ; i++){
      s[i].style.display = 'none';
       //가져온태그의크기만큼 루프를돌려 계속 none상태로 만들어준다다
      
   }
  
   console.log(t.id) //해당id를 확인해보기
   document.getElementById(`${t.id}Box`).style.display = "block";
//id+Box의 이름을 가진 div를 display = 'block'으로변경
}