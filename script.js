let container = document.querySelector(".container");



for(let i = 0; i < 50; i++){
    let newBar = document.createElement("div");
    newBar.classList.add("bar");
    let randomHeight = Math.floor(Math.random() * 100)
    newBar.style.height =  randomHeight + "px"
    container.append(newBar);
}

let waitFor = (milisec)=>{ 
    return new Promise(resolve => { 
        setTimeout(() => { 
            resolve(); 
        }, milisec); 
    }); 
}

let bars = document.querySelectorAll(".bar");
let  swap =  async ()=>{
    for(let i = 0; i < bars.length -1; i++){
    //Highlight Logic
    bars[i].style.backgroundColor = "blue";
    bars[i+1].style.backgroundColor = "blue";
    await waitFor(2000);

    //Swap Logic
    
        let val1 = parseInt(bars[i]?.style.height);
        let val2 = parseInt(bars[i+1]?.style.height);
        let temp = val1;

        if(temp > val2){
            bars[i].style.height = val2 + "px";
            bars[i+1].style.height = temp + "px";
        }
        bars[i].style.backgroundColor = "red";
        bars[i+1].style.backgroundColor = "red";
    }
    
};

swap();

