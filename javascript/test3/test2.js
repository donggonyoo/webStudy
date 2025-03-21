function mover(a){
    let m = document.querySelector(`img[name=m${a}]`);
    console.log(m)
    m.src = `../img/${a}_over.jpg`;
}

function mout(b){
    let m = document.querySelector(`img[name=m${b}]`);
    console.log(m)
    m.src = `../img/${b}_out.jpg`;

}