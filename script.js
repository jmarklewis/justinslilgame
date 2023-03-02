const colors = {
    null: 'white',
    1: 'blue',
    '-1': 'red'
}

//using querySelector to grab the square class
let boardArr = document.querySelectorAll('.square')

let footerEl = document.querySelector('footer')

//Setting up turn now as we will use it later
let turn = 1

let winner = 1



function begin() {
    // Setting every square to white
    boardArr.forEach(function (eachItem) {
        eachItem.style.backgroundColor = colors.null
    })
    //Adding event listener to every square; looking for a click. When it finds the event and the even is the first argument in the parentheses. Second argument is what we do when we find the event
    boardArr.forEach(function (eachItem) {
        eachItem.addEventListener('click', sqrClick)
    })
    renderMess()
    //display whos turn it is
}

function sqrClick(evt) {
    //Getting the attribute of what we clicked.
    let currentSquare = evt.target.getAttribute('id')
   //Checking the classlist if it has the class taken, if it does, it just quits out of the function
    if (evt.target.classList.contains("taken")) {
        return
    } //evt.target means what we clicked
    //class list is a property is the thing we clicked. has a list of class.
    // we are adding ("taken") to that list
    //Click the square and now we are adding taken to that list
    evt.target.classList.add("taken")
    evt.target.style.backgroundColor = colors[turn]
    // setting background color to whoevers turn it is
    turn *= -1
    //Flip turns
    renderMess()
}

function renderMess() {
    //displaying the text of color of the corrosponding players turn
    let currentTurn = colors[turn].toUpperCase()
    footerEl.textContent = currentTurn
    // if (winner != null) {
        //  console.log(currentTurn)
    // }
    footerEl.style.color = currentTurn
    //Now displays text as that color
}


console.log(footerEl)






begin()
//Now that we called begin, the game has begun.