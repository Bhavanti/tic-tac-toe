let nineBoxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let para = document.querySelector("p");
let start=document.querySelector(".start");
console.log(start);
let playerO = true;
// let div = document.createElement('div');
// let vertical = div.setAttribute('class', 'vert');



let fullArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

nineBoxes.forEach((box) => {
    box.disabled=true;
    box.innerText="_"
    start.addEventListener("click",()=>{
        box.disabled=false;
        para.innerText="Player-1 turn!"
        box.innerText=""
    })
    box.addEventListener("click", () => {
        if (playerO === true) {
            para.innerText = `Player-2 turn!`
            box.innerText = "O";
            playerO = false;
        } else {
            para.innerText = `Player-1 turn!`
            box.innerText = "X"
            playerO = true;
        }
        box.disabled = true;
        let someWin=winner();
        if (!someWin){
            checkDraw();
        }
        
    })

});


const winner = () => {
    for (elements of fullArray) {
        let x = nineBoxes[elements[0]].innerText
        let y = nineBoxes[elements[1]].innerText
        let z = nineBoxes[elements[2]].innerText
        if (x != "" && y != "" && z != "") {
            if (x === y && y === z) {
                console.log('x y z', x, y, z)
                console.log('elements', elements);
                [0, 1, 2].forEach(element => {
                    nineBoxes[elements[element]].style.borderColor = 'red';
                });
                para.innerText = `winner! ${x == 'O'? 'Player 1': 'Player 2'}`
                console.log(para.innerText)
            }
    }
    
    }
    
}

resetbtn.addEventListener("click", () => {
    for (eachBox of nineBoxes) {
        eachBox.innerText = "";
        eachBox.disabled = false;
        playerO = true;
        eachBox.style.borderColor="";
    }
    para.innerText = "Player-1 turn!";

});
// const checkDraw = () => {
//     let allFilled = true;

//     for (let i = 0; i < nineBoxes.length; i++) {
//         if (nineBoxes[i].innerText === "") {
//             allFilled = false;
//             break;
//         }
//     }

//     if (allFilled) {
//         para.innerText = "It's a draw!";
//         console.log("It's a draw!");
//     }
// };
const checkDraw=()=>{
    let boxFilled=true;
   
    for (i=0;i<9;i++){
        if (nineBoxes[i].innerText===""){
            boxFilled=false;
            break;
        
        }
    }
     if (boxFilled){
        console.log("draw");
        para.innerText="It's a draw! start again";
    }
}