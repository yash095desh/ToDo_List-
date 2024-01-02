const input = document.querySelector("input")
const add = document.querySelector("button")
const ul = document.querySelector("ul")
const li = document.querySelector(".list-item")

add.addEventListener("click",function(e){
    let value = input.value;
   if(value === ''){
    document.querySelector("input").placeholder = 'please enter  text'
   }else{
    const li =document.createElement("li")
    const span = document.createElement("span")
    li.innerHTML = `${value}`;
    span.innerHTML=`\u00d7`
    ul.appendChild(li)
   li.appendChild(span)
    document.querySelector("input").value = ''
    document.querySelector("input").placeholder = 'Add item'
    savedata()
   }
})
li.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName ===  "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }
})
function savedata(){
    localStorage.setItem("data",li.innerHTML);
}
function showdata(){
    li.innerHTML = localStorage.getItem("data")
}
showdata()