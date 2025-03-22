function mover(a){//버튼에 마우스를 가져다 댈 때
    
    //img태그 중 name이 ma인 태그 조회
    let m = document.querySelector(`img[name=m${a}]`);
    console.log(m)//확인용

    //조회된 태그의 src(경로)를 밑에와같이 변경
    m.src = `../img/${a}_over.jpg`;
}

function mout(b){//버튼에서 벗어날 때
    let m = document.querySelector(`img[name=m${b}]`);
    console.log(m)
    m.src = `../img/${b}_out.jpg`;

}