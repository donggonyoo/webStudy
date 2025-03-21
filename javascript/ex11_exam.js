function drawimg(){

    // let img2 = document.querySelector("img[name=img2]");
    // console.log(img2)
    // img2.src  = "img/"+document.querySelector("select[name=s]").value;

    // let img2 = document.getElementsByName("img2")[0];
    // img2.src ="img/"+document.getElementsByName("s")[0].value;

    let img2 = document.img2; //BOM : Browser Object Model
    img2.src = "img/"+document.f.s.value;
    //form.select.value 의 표준말
}