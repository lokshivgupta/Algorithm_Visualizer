let container = document.querySelector(".container");



document.getElementById("btn").addEventListener("click", ()=>{
    for (let i = 0; i < 50; i++) {
        let newBar = document.createElement("div");
        newBar.classList.add("bar");
        let randomHeight = Math.floor(Math.random() * 100)
        newBar.style.height = randomHeight + "px"
        container.append(newBar);
    }
} );


let waitFor = (milisec) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milisec);
    });
}


document.getElementById("btn2").addEventListener("click" , async ()=>{
    let bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - 1 - i; j++) {
            //Highlight Logic
            bars[j].style.backgroundColor = "blue";
            bars[j + 1].style.backgroundColor = "blue";
            await waitFor(200);

            //Swap Logic

            let val1 = parseInt(bars[j]?.style.height);
            let val2 = parseInt(bars[j + 1]?.style.height);
            let temp = val1;

            if (temp > val2) {
                bars[j].style.height = val2 + "px";
                bars[j + 1].style.height = temp + "px";
            }
            bars[j].style.backgroundColor = "red";
            bars[j+ 1].style.backgroundColor = "red";
        }
        bars[bars.length - 1 - i].style.backgroundColor = "green";

    }
});


