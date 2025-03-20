function print1(){
    let dan = "<table ><caption>세로출력</caption><tr>";
        //html문을 담아놓자 

    for(i=2;i<10;i++){
        dan += "<th>"+i+"단</th></tr>"
        for(j=2;j<10;j++){
           dan += "<tr><td>"+i+"*"+j+"="+(j*i)+"</td></tr>";
        }
    }
    //html문 문장을 한번에 innerHtml이용해
    //  div태그에 넣자!!
    document.getElementById('gugudan').innerHTML = dan;
}

//-----------------------------------------------------------------------------------------------
function print2(){
let dan = "<table ><caption>가로출력</caption><tr>";
    for(a=2;a<10;a++){
        dan += "<th> "+ a +"단 </th> ";
    }
    dan += "</tr>";
 
    for(i=2;i<10;i++){
        dan += "<tr>";  
        for(j=2;j<10;j++){
           dan += "<td>"+j+"*"+i+"="+(j*i)+"</td>";
        }dan += "</tr>";
    }
    document.getElementById('gugudan').innerHTML =dan;
}
//------------------------------------------------------------------------------
function print3(){
    let dan = "<table><caption>2단출력</caption><tr>"
        for(a=2;a<6;a++){
        dan += "<th> "+ a +"단 </th>";
    }
    dan += "</tr>";
    for(i=2;i<10;i++){
        dan += "<tr>";  
        for(j=2;j<6;j++){
           dan += "<td>"+j+"*"+i+"="+(j*i)+"</td>";
        }dan += "</tr>";
    }
    //6~9단단
    dan+="<tr>"
    for(a=6;a<10;a++){
        dan += "<th> "+ a +"단 </th>";
    }
    dan += "</tr>";
    for(i=2;i<10;i++){
        dan += "<tr>";  
        for(j=6;j<10;j++){
           dan += "<td>"+j+"*"+i+"="+(j*i)+"</td>";
        }dan += "</tr>";
    }
    document.getElementById('gugudan').innerHTML = dan;


}