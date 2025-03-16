const boxes = document.querySelectorAll(".box")

const xInsideB1 = document.querySelector(".b1 .x-display")

function listen(e) {
    
    if (e.target.classList.contains('b1')) {
        console.log("Before:", xInsideB1.classList)
        xInsideB1.classList.remove("display")
    }
}

boxes.forEach(box => {
    box.addEventListener('click', listen)
})


// need to be able to select individual boxes
// then distinguish between x and o divs in that box
// control for which player is active
// finally, check for three in a row (hard)