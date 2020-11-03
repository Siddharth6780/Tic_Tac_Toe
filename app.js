const statusdiv = document.querySelector('.status');
const resetdiv = document.querySelector('.reset');
const celldivs = document.querySelectorAll('.game-cell');
let gameislive = true;
let xisnext = true;
let winner = null;
const xsymbol = '×';
const osymbol = '○';
const lettertosymbol = (letter) => letter === 'x' ? xsymbol : osymbol;
resetdiv.addEventListener('click', function () {
    xisNext = true;
    statusdiv.innerHTML = `${xsymbol} is next`;
    for (const celldiv of celldivs) {
        celldiv.classList.remove('x');
        celldiv.classList.remove('o');
        celldiv.classList.remove('won');
    }
    gameisLive = true;
});
const handleWin = (letter) => {
    gameislive = false;
    winner = letter;
    if (letter === 'x') {
        statusdiv.innerHTML = `${lettertosymbol(letter)} is the winner`;
    }
    else {
        statusdiv.innerHTML = `<span>${lettertosymbol(letter)} is the winner</span>`;
        xisnext=!xisnext;
    }
};
const chekgamestatus = () => {
    const topLeft = celldivs[0].classList[2];
    const topMiddle = celldivs[1].classList[2];
    const topRight = celldivs[2].classList[2];
    const middleLeft = celldivs[3].classList[2];
    const middleMiddle = celldivs[4].classList[2];
    const middleRight = celldivs[5].classList[2];
    const bottomLeft = celldivs[6].classList[2];
    const bottomMiddle = celldivs[7].classList[2];
    const bottomRight = celldivs[8].classList[2];
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        celldivs[0].classList.add('won');
        celldivs[1].classList.add('won');
        celldivs[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
        celldivs[3].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
        celldivs[6].classList.add('won');
        celldivs[7].classList.add('won');
        celldivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
        celldivs[0].classList.add('won');
        celldivs[3].classList.add('won');
        celldivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
        celldivs[1].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
        celldivs[2].classList.add('won');
        celldivs[5].classList.add('won');
        celldivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
        celldivs[0].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        celldivs[2].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[6].classList.add('won');
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameissLive = false;
        statusdiv.innerHTML = 'Game is tied!';
    } else {
        xisnext = !xisnext;
        if (xisnext) {
            statusdiv.innerHTML = `${xsymbol} is next`;
        } else {
            statusdiv.innerHTML = `${osymbol} is next`;
        }
    }
};
const handelcellclick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];
    if (classList[2] === 'x' || classList[2] === 'o') {
        return;
    }
    else if (xisnext) {
        e.target.classList.add('x');
        chekgamestatus();
    }
    else {
        e.target.classList.add('o');
        chekgamestatus();
    }
}
for (const celldiv of celldivs) {
    celldiv.addEventListener('click', handelcellclick);
}