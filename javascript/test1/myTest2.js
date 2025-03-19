function but(){
   let age = confirm("네이버에 접속할건가요?")
   if(!age){
    alert("나가세요");
   }
   else{
    alert("환영합니다");
    let a = document.getElementById('naver');
    open(a);
    //a의 링크에 접속하게됨


   }
}