
function show_cal(){
    let y = document.querySelector("#y").value;
    
    
    
    let a = `<table class='mon'><caption>${y}년</caption><tr>`;
    for(let d=0 ;d<=11 ;d++){//Date의 월(month) : 0~11
        let date = new Date(y,d,1);
        //d월의 마지막날짜를 구하기위함
        let date2 = new Date(y,(d+1),0);
        let lastday = date2.getDate();
        a+= `<td><table class='mon'><caption>${d+1}월</caption>`;
        a += `<th class='mon text-red'>일</th><th class='mon'>월</th><th class='mon'>화</th><th class='mon'>수</th>
        <th class='mon'>목</th><th class='mon'>금</th><th class='mon text-blue'>토</th></tr><tr>`;
    
        let day = 1;
        for( i=date.getDay() ; day<=lastday ; i++ ){
            if(day==1){
                for(j=0 ; j<i;j++){
                    a+=`<td class='mon'></td>`
                } 
                if(i==6){ //토요일이라면 행을 바꿔주고 class text-blue지정
                    a+=`<td class='mon text-blue' >${day}</td></tr><tr>`
                }
                else if(i==0){ //일요일이라면 class text-red지정
                    a+=`<td class='mon text-red' >${day}</td>`
                }
                else{ //모두아니라면 그냥 날짜만 찍어준다
                    a+=`<td class='mon'>${day}</td>`
                }
                day++; //날짜++
            }
            else{
                if(i%7==0){  //일요일 : 0 7 14 21 28 -> 7로나눈 나머지는 0 
                    a+=`</tr><tr><td class='mon text-red'>${day}</td>`
                }
                else if((i+1)%7==0){ //토욜 : 6 13 20 ... -> +1을 해주고 %7을하면 0이 됨
                    a+=`<td class='mon text-blue'>${day}</td>`
                }
                else{
                    a+=`<td class='mon'>${day}</td>`
                }
                day++;
            }
        }
        for(i=date2.getDay() ; i<6 ;i++){
            a+= "<td class='mon'></td>"
        } //칸을 맞추기위해(수요일이면 토요일까지의 달력을 빈칸으로채우는 것)
        a+= `</table></td>` 
        if ((d+1)%4==0){a+=`</tr><tr>`}
        
    }
    a+=`</table>`;
    document.querySelector("#cal").innerHTML = a;
    
    }