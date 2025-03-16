let p1 = 'active'

function activePlayer() {
    p1 == 'active' ? p1 = 'inactive' : p1 = 'active'
};

console.log(p1)

const boxes = document.querySelectorAll(".box")


function listen(e) {
    e.currentTarget.querySelector(".o-display").classList.remove("o-display"); // Remove the 'display' class to show the element
}


boxes.forEach(box => {
    box.addEventListener('click', listen)
})


// need to be able to select individual boxes
// then distinguish between x and o divs in that box
// control for which player is active
// finally, check for three in a row (hard)