function stringHtmlTest(){
    const divEl = document.querySelector("#area2");
    let str = "javascript"
    divEl.innerHTML = `str : ${str}<br>`
    divEl.innerHTML+= `bold() : ${str.bold}<br>`
    divEl.innerHTML += `italics() : ${str.italics()}<br>`
    divEl.innerHTML += `sub(),sup() : ${str.sub()},${str.sup()}<br>`
    divEl.innerHTML += `link() : ${str.link("http://www.naver.com") }<br>`

    //이와같은 방식을 더 추천함
    divEl.innerHTML += `link() : ${`<a href="http://www.naver.com" target="_blank">${str}</a>`}<br>`

}