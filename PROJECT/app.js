const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdown = document.querySelectorAll("select");
let btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select")

for (select of dropdown){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.value=code;
        newOption.innerText=code;
        select.append(newOption);
        if(select.name === "from" && code==="USD"){
            newOption.selected="selected"
        }else if (select.name ==="to" && code==="INR"){
            newOption.selected="selected"
        }
    }
    select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        })

    
}
const updateFlag=(element)=>{
  let Currcode = element.value;
    console.log(Currcode);
  let newSrc = `https://flagsapi.com/${countryList[Currcode]}/flat/64.png`
 let image = element.parentElement.querySelector("img");
 image.src=newSrc; 
};

btn.addEventListener("click", async ()=>{
    console.log("button was clicked")
    let amount= document.querySelector("input");
    let amtVal = amount.value;
    console.log(amtVal);
    if(amtVal === "" || amtVal < 0 ){
        alert("error! enter valid amount");
    }
 console.log(fromCurr.value,toCurr.value)
 let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`
 let response =  await fetch (URL)
})