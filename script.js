let p1 = 'active'

function activePlayer() {
    p1 == 'active' ? p1 = 'inactive' : p1 = 'active'
};

console.log(p1)

const boxes = document.querySelectorAll(".box");

const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");
const b8 = document.querySelector(".b8");
const b9 = document.querySelector(".b9");


if (p1 == 'active') {

    function listen(e) {
        e.currentTarget.querySelector(".o-display").classList.remove("o-display"); // Remove the 'display' class to show the element
        e.currentTarget.classList.add("o-true");


        if (b1.classList.contains('o-true') && b2.classList.contains('o-true') && b3.classList.contains('o-true')) {
            console.log("you win")
        }

    }
}

else {
    function listen(e) {
        e.currentTarget.querySelector(".x-display").classList.remove("x-display"); // Remove the 'display' class to show the element
        e.currentTarget.classList.add("x-true");
    }
}




boxes.forEach(box => {
    box.addEventListener('click', listen)
})



// need to be able to select individual boxes
// then distinguish between x and o divs in that box
// control for which player is active
// finally, check for three in a row (hard)