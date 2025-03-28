function changeColor(){
    let c = $("input[type=color]").val(); //선택한색의 16진수값
    // let c = $(":color").val();jQuery에서는 color는 지원하지않음

   $("#div1").css("backgroundColor",`${c}`);
   //div1의 태그내의 backgroundColor를 선택한값으로바꿔줌
}

function sizeChange(e){
    $("#div2").css({width:`${e}` , height:`${e}`})
    //class=div2인 태그를 조회 후
    //css(width,height)를 설정해줌
}
