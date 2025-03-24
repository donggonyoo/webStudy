function print2Test(){
    let r = document.querySelector("#remove").value;
    let a = document.querySelector("#add").value;

    let str = document.querySelector("#stringla4").textContent;
    //textContent로 꺼내야 String타입으로나온다

    console.log(str);
    console.log(typeof str);
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