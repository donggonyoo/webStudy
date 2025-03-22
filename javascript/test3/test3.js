function show_cal(){
    let y = document.querySelector("#y").value;
    console.log(y)//선택된option이 나옴

    let m = document.querySelector("#m").value;
    console.log(m)//선택된option이 나옴 //month-1을 해줘야 해당달이들어감

    let day=1;
    let date = new Date(y,m-1,day);
    //Date방식의 month : 0~11
    let date2 = new Date(y,m,0);
    //해당 달+1 세팅 후 date를 0 으로설정 시
    //해당달의 마지막날짜가 세팅 됨
    let lastDay = date2.getDate();
    
    let a = `<table><tr> <caption>${y}년${m}월</caption>`
    a+=`<th class='text-red'>일</th><th>월</th><th>화</th><th>수</th>
    <th>목</th><th>금</th><th class='text-blue'>토</th></tr> <tr>`;
    let week = date.getDay();
    

    for( i=week ; day<=lastDay ; i++ ){
        if(day==1){
            for(j=0 ; j<i;j++){
                a+=`<td></td>`
            } 
            if(i==6){ //토요일이라면 행을 바꿔주고 class text-blue지정
                a+=`<td class='text-blue' >${day}</td></tr><tr>`
            }
            else if(i==0){ //일요일이라면 class text-red지정
                a+=`<td class='text-red' >${day}</td>`
            }
            else{ //모두아니라면 그냥 날짜만 찍어준다
                a+=`<td>${day}</td>`
            }
            day++; //날짜++
        }
        //여기까지는 해당 월의 1일만 해당하는 문장들임
        //⬇⬇⬇  날짜가 1일이 아닌 경우 

        else{
            if(i%7==0){  //일요일 : 0 7 14 21 28 -> 7로나눈 나머지는 0 
                a+=`</tr><tr><td class='text-red'>${day}</td>`
            }
            else if((i+1)%7==0){ //토욜 : 6 13 20 ... -> +1을 해주고 %7을하면 0이 됨
                a+=`<td class='text-blue'>${day}</td>`
            }
            else{
                a+=`<td>${day}</td>`
            }
            day++;
        }
    }

    for(i=date2.getDay() ; i<6 ;i++){
        a+= "<td></td>"
    } //칸을 맞추기위해(수요일이면 토요일까지의 달력을 빈칸으로채우는 것)
    
    a+= "</tr></table>"

    let cal = document.querySelector("#cal");
    cal.innerHTML += a; //쿼리를 전부다 cal.innerHTMl에 넣기

}