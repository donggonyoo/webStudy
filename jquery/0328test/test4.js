
function stringLength() {
    let a = $(":text").val(); //type="text"의 value 가져오기
    console.log(a , typeof a);

    $("#result1").html("길이 : "+a.length); 
    //a의길이를 result1의 태그에넣기
}


function stringSplit(){
    let a  = $("#la1").html().split(",");
    //innerHTML을 가져온 후 split(",")
   let arr = `<ol>`
   for(i in a){
    arr+=`<li>${a[i]}</li>`;
   }arr+=`</ol>`; //순서가있는리스트로만들어줌

   $("#result2").html(arr);

    
}