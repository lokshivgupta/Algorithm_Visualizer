let container = document.querySelector(".container");



for(let i = 0; i < 50; i++){
    let newBar = document.createElement("div");
    newBar.classList.add("bar");
    let randomHeight = Math.floor(Math.random() * 100)
    newBar.style.height =  randomHeight + "px"
    container.append(newBar);
}
