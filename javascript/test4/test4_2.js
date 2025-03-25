function print3Test(){
    let r = document.querySelector("#remove").value;
    let a = document.querySelector("#add").value;

    let str = document.querySelector("#stringla4").textContent;

    console.log(str);

    let  total =str.replace(r,a);
    if(total === str){
        alert(r+"은존재하지않습니다");     
    }
    else{
        document.querySelector("#print4_2").innerHTML =  total 
    }

    
}