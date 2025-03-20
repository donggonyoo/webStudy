function printValue(){
    let buyer = document.getElementsByTagName("input");
    let product = document.getElementById("pname").value;
    let price = document.getElementsByName("price");

    //tag , name 으로 조회하는것들을
    //배열형태로 조회함
    let area = document.querySelector("#area");
    area.innerHTML= `구입자 : ${buyer[0].value}님 <br>
    구입상품 : ${product} <br>
    구매가격 : ${price[0].value}`
}