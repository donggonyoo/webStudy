function input(){
    let str = document.querySelector("#strInput").value;
    animal.names.push(str);
    document.querySelector("#strInput").value = " ";
    //저장 후 쓴 글씨는 초기화

}

const animal = {
    names: []
}

function printTest(){
    document.querySelector("#print2").innerHTML = animal.names;

}
