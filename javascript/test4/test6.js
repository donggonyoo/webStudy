function insertMember(){
    let names = prompt('이름 입력');
    let age  = prompt('나이를 입력');
    let address = prompt('주소입력');
    Member.member.push(new mem(names,age,address));
    //객체의 속성인 member배열에 push해서 생성자를 쌓자.

}

const Member ={
    member:[]
};

function mem (names,age,address){
    this.names = names;
    this.age = age;
    this.address = address;
}

function printMember(){
    if(Member.member.length == 0 ){
        alert("입력을 먼저해주세요");
    }

//    for(i=0 ; i<Member.member.length;i++){
//     let m = Member.member[i];
//     document.querySelector("#print").innerHTML += `이름 : ${m.names}<br>`;
//     document.querySelector("#print").innerHTML += `나이 : ${m.age}<br>`;
//     document.querySelector("#print").innerHTML += `주소 : ${m.address}<br><br>`;
//    };
   for(i in Member.member){
    document.querySelector("#print").innerHTML += "이름:"+Member.member[i].names;
    document.querySelector("#print").innerHTML += " | 나이:"+Member.member[i].age;
    document.querySelector("#print").innerHTML += " | 주소:"+Member.member[i].address+"<br>";
   }
}