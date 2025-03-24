document.getElementById("userName").onkeyup = function(e){
    console.log("e:",e); //key이벤트객체
    console.log("this.value : ",this.value);//input태그의 value
    console.log("e.key : "+e.key);//눌려진키의 key값
    console.log("e.keyCode : "+e.keyCode);//눌려진 키의 code값
}

function test4(){

    // if(confirm("구글페이지로 이동하시겠어요?" )){
    //     return true; //확인버튼 누를 시 true 반환
    // }
    // else{
    //     return false; //취소버튼 누르면 false반환
    // }
    return confirm("구글페이지로 이동하시겠어요?" );
}

function validate(){
    //아이디유효성검사 : 영문자 or 숫자로만 5글자이상 12글자 이하 가능
    // 형식에 맞지않는 경우 => 알림창 출력 . 기본이벤트 막기
    //형식에맞다면 그냥 submit

    const userId = document.getElementById("userId").value;
    // if(userId.length>=5 && userId.length<=12){
    //     for(let i=0 ; i<userId.length;i++){
    //         if(userId.charAt(i)>=0 && userId.charAt(i)<=9
    //         ||userId.charAt(i)>='A' && userId.charAt(i)<='z'){
    //         }
    //         else{
    //             alert("숫자 or 영문자만 입력하시오")
    //             return false;
    //         }
    //     }return true;
    // }
    // else{
    //     alert("5자리~12자리 사이만 입력")
    //     return false;
    // }

    //정규식을 이용해 아이디 유효성 검사하기
    const regExp = /^[a-zA-Z0-9]{5,12}$/i;
    //소문자의 아스키코드 > 대문자아스키코드
    if(!regExp.test(userId)){//정규표현식과 일치하지않는다면
        alert("유효한 아이디의형식X 다시입력")
        document.getElementById("userId").select();//텍스트전체를 선택해줌
        return false;
    }
}