let p1 = 'activde'

function activePlayer() {
    p1 == 'active' ? p1 = 'inactive' : p1 = 'active'
};

console.log(p1)

const boxes = document.querySelectorAll(".box")

const xInsideB1 = document.querySelector(".b1 .x-display")
const oInsideB1 = document.querySelector(".b1 .o-display")


function listen(e) {

    if (p1 == 'active') {

        if (e.target.classList.contains('b1')) {
            xInsideB1.classList.remove("x-display")}
        }
    else {

        if (e.target.classList.contains('b1')) {
            oInsideB1.classList.remove("o-display")}
    }
}


boxes.forEach(box => {
    box.addEventListener('click', listen)
})


// need to be able to select individual boxes
// then distinguish between x and o divs in that box
// control for which player is active
// finally, check for three in a row (hard)