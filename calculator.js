let out = document.getElementById("output");
let show = document.getElementById("out");

function any(e) {
    console.log(e.target.value);
    out.innerHTML += e.target.value;
    show.innerHTML += e.target.value;
}

function calculate(e) {
    console.log(e.target.value);
    out.innerHTML += e.target.value;
    show.innerHTML += e.target.value;
}

function equalTo() {
    let value = show.innerHTML;
    console.log(value);

    if (show.innerHTML.includes("+")){
        let numbers = value.split("+")
        // show.innerHTML = (Math.floor(Number(numbers[0]) + Number(numbers[1])*10))
        show.innerHTML = Number(numbers[0]) + Number(numbers[1])
        console.log(show.innerHTML);
    }

    else if (show.innerHTML.includes("-")) {
        let numbers = value.split("-")
        show.innerHTML = Number(numbers[0]) - Number(numbers[1])
        console.log(show.innerHTML);
    }
    

    else if (show.innerHTML.includes("*")) {
        let numbers = value.split("*")
        show.innerHTML = Number(numbers[0]) * Number(numbers[1])
        console.log(show.innerHTML);
    } 
    
    else if (show.innerHTML.includes("^")) {
        let numbers = value.split("^")
        show.innerHTML = Number(numbers[0]) ** Number(numbers[1])
        console.log(show.innerHTML);
    }

    else {
        let numbers = value.split("÷")
        show.innerHTML = Number(numbers[0]) / Number(numbers[1])
        console.log(show.innerHTML);
    }
}

function cls() {
    let text = show.innerHTML
    console.log(text);
    out.innerHTML = text.slice(0, show.innerHTML.length - 1)
    show.innerHTML = text.slice(0, show.innerHTML.length - 1)
}

function clsAll() {
    let text = show.innerHTML
    console.log(text);
    show.innerHTML = text.slice(0, show.innerHTML.length - show.innerHTML.length)
    out.innerHTML = text.slice(0, show.innerHTML.length - show.innerHTML.length)
}

function changeColor(ev) {
    document.body.style.backgroundColor = ev.target.value;
}