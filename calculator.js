let show = document.getElementById("out")
// show.innerHTML = 0;

// function any(e) {
//     show.innerHTML = ''
// }
//Event is 
function any(e) {
    // show.innerHTML = ''
    console.log(e.target.value);
    // const value = e.target.value;
    show.innerHTML += e.target.value;
}

function calculate(e) {
    // show.innerHTML = ''
    console.log(e.target.value);
    show.innerHTML += e.target.value;
}

function equalTo() {
    // show.innerHTML = ''
    let value = show.innerHTML;
    console.log(value);

    if (show.innerHTML.includes("+")) {
        let numbers = value.split("+")
        show.innerHTML = Number(numbers[0]) + Number(numbers[1])
    }

    else if (show.innerHTML.includes("-")) {
        let numbers = value.split("-")
        show.innerHTML = Number(numbers[0]) - Number(numbers[1])
    }
    

    else if (show.innerHTML.includes("*")) {
        let numbers = value.split("*")
        show.innerHTML = Number(numbers[0]) * Number(numbers[1])
    } 
    
    else if (show.innerHTML.includes("^")) {
        let numbers = value.split("^")
        show.innerHTML = Number(numbers[0]) ** Number(numbers[1])
    }

    else {
        let numbers = value.split("÷")
        show.innerHTML = Number(numbers[0]) / Number(numbers[1])
    }


    // console.log(value.split("+"));
    // console.log();
}

function cls() {
    let text = show.innerHTML
    console.log(text);
    show.innerHTML = text.slice(0, show.innerHTML.length - 1)
}

function clsAll() {
    let text = show.innerHTML
    console.log(text);
    show.innerHTML = text.slice(0, show.innerHTML.length - show.innerHTML.length)
    // show.innerHTML = ''
}

function changeColor(ev) {
    document.body.style.backgroundColor = ev.target.value;
}