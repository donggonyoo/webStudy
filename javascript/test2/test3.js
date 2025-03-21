function colorChange(){
    const di = document.getElementById("di");
    let color = document.querySelector("#color").value;

    di.innerHTML = `${color}색`
    di.style.backgroundColor = color;
}
function sizeChange(num){
    const si = document.getElementById("si");
    si.style.width = num+"px";
    si.style.height = num+"px";
}
