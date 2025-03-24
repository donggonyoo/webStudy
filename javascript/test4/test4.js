function print2Test(){
    let r = document.querySelector("#remove").value;
    let a = document.querySelector("#add").value;
    console.log(r);
    console.log(a);

    let str = document.querySelector("#stringla4").textContent;
    let arr= str.split(" ");//텍스트를 배열로바꿔줌

    if(arr.indexOf(r) == -1){
        alert(r+"은 존재하지않습니다")
    }
    else{
        arr.splice(arr.indexOf(r),1,a);

    let total ='';
    for(i in arr){
        total += arr[i]+" ";
    }
    document.querySelector("#print4").innerHTML = total;

    }
    
}