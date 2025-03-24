function arrayTest(){
    let fi = document.getElementsByTagName("label");
  
    let arr='';
    for(i=0;i<fi.length;i++){
        if(i==(fi.length)-1){
            arr += (fi[i].textContent);//마지막 요소에는 , 를붙이지않아도됨
        }
        else{
            arr += (fi[i].textContent+",");
        }
    }
    let total = arr.split(",");//합쳐진 text를 , 를기준으로 배열만듬
    let text = document.getElementById("text").value;
    if(total.indexOf(text) == -1){//존재하지않는값을 조회 시 -1이반환됨
        alert(text+'존재X');
    }
    else{
        alert(text+"는"+total.indexOf(text)+"번에 존재합니다");
    }
    
   
}
