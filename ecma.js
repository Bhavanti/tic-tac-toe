// let btn=document.querySelector("button");
// let mode="light";
// btn.addEventListener("click" , ()=>{
//     if(mode==="light"){
//         mode="dark";
//         document.querySelector("body").style.backgroundColor="black"
//         btn.style.backgroundColor="white"
//         btn.style.color="black"

//     }else{
//         mode= "light"
//         document.querySelector("body").style.backgroundColor="white"
//         btn.style.backgroundColor="aqua"
//         btn.style.color="red"
//     }
//     console.log(mode);
// });
// 
 let boxes= document.querySelectorAll(".box");
 console.log('boxes',boxes);
 console.log('boxes[0]',boxes[0]);
 console.log('boxes[1]',boxes[1]);
 
 let turnO = true;
 let fullarray=[[0,1,2],[3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
   box.disabled=true;
   winner();
  });
 });
 const winpara=()=>{
  let head = document.querySelector("h3");
  let para=document.createElement("p");
  para.setAttribute("class","hide")
  para.innerText="hello"
  head.append(para);
  
 }
 let para = document.querySelector("p");
 console.log(para);
 
  const winner=()=>{
    for(eachElement of fullarray){
      // eachElement - [6,7,8]
      // eachElement[1] - 7
      // pos = boxes[eachElement[1]] = boxes[7] - button at 7 position
        let pos1=boxes[eachElement[0]].innerText
        let pos2=boxes[eachElement[1]].innerText
        let pos3=boxes[eachElement[2]].innerText
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                 winpara();
                 console.log(para.innerText); 
            }
        }
    }
  };
  let resetbtn=document.querySelector(".reset");
  let resetGame =()=>{
    turnO="true";
    enableboxes();
    
  }
  const enableboxes=()=>{
    for(let box of boxes){
         box.disabled=false;
         box.innerText=""
    }

  }

  resetbtn.addEventListener("click", resetGame );