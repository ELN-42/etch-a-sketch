function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function buildgrid(value){
    while(value>100){
        alert("The given size is greater than 100. Please enter a new Value.");
        value = prompt("Enter the Grid size", 16);
    }
    let max = value*value;
    let percentwidth = (100/value) + "%";
    let container = document.querySelector("#container");
    container.style.opacity = 1;
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    for(let i = 0; i<max; i++){
        let item = document.createElement('div');
        item.style.width = percentwidth;
        item.style.height = percentwidth;
        item.style.backgroundColor = "red";
        //item.addEventListener("mouseover" , (event) => event.target.style.backgroundColor = "rgb("+getRandomInt(256)+","+getRandomInt(256)+","+getRandomInt(256)+")");
        item.addEventListener("mouseover" , (event) => stylecolor(container, event.target));
        container.append(item);
    }
}

function stylecolor(container, item){
    item.style.backgroundColor = "rgb("+getRandomInt(256)+","+getRandomInt(256)+","+getRandomInt(256)+")";
    container.style.opacity -= 0.01; 
}

function resetgrid(){
    value = prompt("Enter the Grid size", 16);
    buildgrid(value);
}

buildgrid(16);
let button = document.querySelector(".reset");
button.addEventListener("click", resetgrid);
