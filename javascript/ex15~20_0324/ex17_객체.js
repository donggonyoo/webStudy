function test1(){
    //자바스크립트의 배열 : 자바의 List객체와 유사
    //배열은 인덱스이용해 요소를 사용할수있음
    const arr = ["망고",4000,"피클",["망고","설탕"]];

    //자바스크립트의 객체 : 자바의 Map객체와유사함
    //객체는 key값을 이용해 요소사용
    /*객체(Object)
        1.여러개의 값으로 구성된 하나의데이터
        2.중괄호 {} 로 표현
        3.하나의값은 쌍(pair)로 구성
        {
        "속성명" : "속성값" , 
        속성명 : "속성값"
         ...
        }
        객체의 속성 조회법
        1. 대괄호 : 객체명["속성명"]
        2. .이용  : 객체명.속성명
     */
    const product = {
        pName : "망고",
        price : 4000,
        kind : "피클",
        ingredient : ["망고","설탕"]
    }
    console.log(product);
    console.log(typeof product);
    let div1 = document.querySelector("#area1");
    //방법1 객체명.속성명
    div1.innerHTML+= "<h4>방법1</h4>";
    div1.innerHTML+= "product: "+product+"<br>";
    div1.innerHTML+= "pName : "+product.pName+"<br>";
    div1.innerHTML+= "price : "+product.price+"<br>";
    div1.innerHTML+= "kind : "+product.kind+"<br>";
    div1.innerHTML+= "ingredient[0] : "+product.ingredient[0]+"<br>";
    div1.innerHTML+= "ingredient[1] : "+product.ingredient[1]+"<br>";

    //방법2   객체명["속성명"]
    div1.innerHTML+= "<h4>방법2</h4>";
    div1.innerHTML+= "product: "+product+"<br>";
    div1.innerHTML+= "pName : "+product["pName"]+"<br>";
    div1.innerHTML+= "price : "+product["price"]+"<br>";
    div1.innerHTML+= "kind : "+product["kind"]+"<br>";
    div1.innerHTML+= "ingredient[0] : "+product["ingredient"][0]+"<br>";
    div1.innerHTML+= "ingredient[1] : "+product["ingredient"][1]+"<br>";
    
}