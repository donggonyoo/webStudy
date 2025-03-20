function colorChange(){
    const di = document.getElementById("di");
    let color = document.querySelector("#color").value;

    di.innerHTML = `${color}색`
    di.style.backgroundColor = color;
}
function small(){
    const si = document.getElementById("si");
    si.style.width = "50px";
    si.style.height = "50px";
}

function original(){
    const si = document.getElementById("si");
    si.style.width = "100px";
    si.style.height = "100px";
}

function big(){
    const si = document.getElementById("si");
    si.style.width = "200px";
    si.style.height = "200px";
}