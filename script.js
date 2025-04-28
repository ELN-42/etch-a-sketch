let value = 16;
let container = document.querySelector("#container");
let percentwidth = (100/value) + "%";
console.log(percentwidth);
let max = value*value;
for(let i = 0; i<max; i++){
    let item = document.createElement('div');
    item.style.width = percentwidth;
    item.style.height = percentwidth;
    item.style.backgroundColor = "red";
    item.addEventListener("mouseover" , (event) => event.target.style.backgroundColor = "green");
    container.append(item);
}