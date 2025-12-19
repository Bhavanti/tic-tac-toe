// class Parent{
//     constructor(name){
//         this.fullName=name
//     }
//     childNum(count){
//         this.mem=count
//     }
//      work(){
//         console.log("keeps u hydrated");
//     }
// }
// class Fruits extends Parent{
//     constructor(name){
//         super(name);
//     }
//     fruitWork(){
//       super.work();
//       console.log("available in summer");
//     }

// }
// let nutrition = new Fruits("lithi"); 
//  nutrition.childNum=1;



//  class User{
//     constructor(name,email,roll){
//         this.userName=name
//         this.userEmail=email
//         this.rollNum=roll
//     }
//     viewData(){
//         console.log("secret data");
//     }
//  }

//  let student1 = new User("Rout Bhavanti" , "bbnti@gmail.com" , 12135214);
//  let student2 = new User("Subhangi Subhrajyoti Naik" , "shivangi@gmail.log" , 12134306)







//  const people = (name1) => {
//          console.log("name=",name1);
//  }
//  const peopleName = (name2)=>{
//    const name1="bhavanti"
//     name2(name1)
//  }
//  peopleName(people);

// //  const num  = (a,b) =>{
// //     console.log("sum=", a+b);
// //  }
// //  const sum = (a,b,numSum)=>{
  
// //     numSum(a,b) //numsum=num
// //  }
// //  sum(5,6,num);




//  let promesa = new Promise((rej,resol)=>{
//     console.log("hello promise!")
//     rej("some error")
//  })
 

// //  setTimeout(()=>{
// //     console.log("hello!");
// // },4000);
// //  console.log("hello1");
// //   console.log("hello2");
// //  console.log("hello3");
// //  setTimeout(()=>{
// //     console.log("other hello")
// //  },2000)

// //callback hell
// // const getData=(name,rollNo)=>{
// //     setTimeout(()=>{console.log("name=", name)
// //     },2000)
// //     setTimeout(()=>{
// //         console.log("roll-no.=",rollNo)
// //     },4000)
// // }
// // getData("Bhavanti",12135214)

// const Databases=(name,nextName)=>{
//     setTimeout(()=>{
//         console.log("name=",name);
//         nextName();
//     },2000)
    
// }
// Databases("Subhangi",Databases("Chintu"));

// const createCounter=(n)=>{
//     return function (){
//     return n++;
//     }
// }
 
//  const counter = createCounter(2);
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//  console.log("bhavanti");

//  let nums=[1,2,3,4,6,8];
 
//  const numSum = ()=>{
//     let target = 7;
//  for (let i=0; i<nums.length; i++){
//     // console.log("i=",nums[i]);
//      for (let j=i+1;j<nums.length;j++){
//         // console.log("j=",nums[j])
//          if (nums[i]+nums[j]===target){
//         console.log("sum matched")
//          console.log(nums[i],nums[j])
//     }
    
//      }
//      break;
//  }
   
// }
// numSum();

 
//  const twoSum = (nums,target)=>{
//  for (let i=0; i<nums.length; i++){
//      for (let j=i+1;j<nums.length;j++){
//          if (nums[i]+nums[j]===target){
//          console.log(nums[i],nums[j])
//          return;
//     }
    
//      }
//  }
   
// }
// twoSum([2,7,11,15],9);

// const nums=[2,3,5,7,8]
// chttps://catfact.ninja/facts?limit=10;
// for (let i=0; i<nums.length;i++){
//     //   console.log(nums[i]);
//       for (let j=0;j<nums.length;j++){
//     // console.log(nums[j])
//     if(i!=j){
//         if(nums[i]+nums[j]===target){
//             console.log("sum matched",nums[i],nums[j]);
//             return;
//         }
        
//     }
   

// }
// }
// }
// numSum();
// function magic() {
//   return function calc(x) {
//     return x * 42;
//   };
// }

// const answer = magic();
// console.log(answer(1337))


// const num =(y)=>{
//   return function(){
//     return y+2;
//   };
// }
// const add = num(2);
// console.log(add());


// const isPalindrome=(x)=>{
//     let str= x.toString();
//     let left=0;
//     let right=str.length-1
//     for( left;left<right;left++,right--){
//     if(str[left]!==str[right]){
//         return false;
//     }
//     }
//     return true;
    
// }
// console.log(isPalindrome(112311))
// const sum=()=>{
// const https://catfact.ninja/facts?limit=10;
// for (let i = 0; i<nums.length; i++){
//     // console.log(nums[i]);
//     for (let j=0; j<nums.length; j++){
//         // console.log(nums[j]);
//         if (nums[i]+nums[j]===target){
//             return [i,j];
//         }
//     }
// }
// }
// console.log(sum());

// const isPalindrome=(x)=>{
//     let str = x.toString();
//     let leftnum=0;
//     let rightnum=str.length-1;
//     for(leftnum=0;leftnum<rightnum;leftnum++,rightnum--){
//         if(str[leftnum]!==str[rightnum]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome(122515221));
// const createCounter = (init) =>{
//     let current = init;
//       const increment = ()=>{
//         return ++current
//       }
//       const decrement=()=>{
//         return --current
//       }
//       const reset =()=>{
//         current=init;
//         return current;
//       }
//       return{
//         increment,
//         decrement,
//         reset
//       };
// }
// const counter=createCounter(0);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());





// const compose=(Function)=>{
//     const value =(x)=>{
//         return x;
//     }
//     if (Function.length===0){
//         return value
//     }
//     return function(x){
//         let result=x
//         for(let i=Function.length-1; i>=0; i--){
//             result=Function[i](result);
//         }
//         return result;
//     }
//}

// const valFunction = [
//      (x)=>{
//         return x+1;
//     },
//     (x)=>{
//         return x*x
//     },
//     (x)=>{
//         return 2*x
//     }
// ];
// const composed = compose(valFunction);
// console.log(composed(5));





// 


// const countPairs=(nums,target)=>{
//    let count =0;
//        for(let i=0;i<nums.length;i++){
//         // console.log("i=",nums[i]);
//         for(let j=i+1;j<nums.length;j++){
//                 // console.log("j=",nums[j])
//                  if(nums[j]+nums[i]<target){
//                   count++
//                  }
            
//         }
//        }
//        return count;
// }
// console.log(countPairs([0,1,5,6,8,7],9))


// const distinctAverages=(nums)=>{
//    let set = new Set()
//    while(nums.length!=0 && nums.length%2===0){
//          let minNum = Math.min(...nums);
//          let maxNum = Math.max(...nums);
//          nums.splice(nums.indexOf(minNum),1);
//          nums.splice(nums.indexOf(maxNum),1);
//          let avg = (minNum+maxNum)/2
//          set.add(avg);
         
//    }
//    return set.size
// }
// console.log(disthttps://catfact.ninja/facts?limit=10,58]));


// let nums = [2,1,5,4,6,9];
// let minNum = Math.min(...nums);
// nums.splice(nums.indexOf(minNum),1)
// nums.splice(3,0,7)
// console.log(nums);

// const distinctAverages = (nums)=>{
//     let set = new Set();
//     while( nums.length!=0 && nums.length%2===0 ){
//         let minNum = Math.min(...nums);
//         let maxNum = Math.max(...nums);
//         let avg = (minNum+maxNum)/2;
//         set.add(avg);
//         nums.splice(nums.indexOf(minNum),1);
//         nums.splice(nums.indexOf(maxNum),1);
        
//     }
//     return set.size;
// }

// console.log(distinctAverages([1,8,9,10,12]))


// const findMaxK = (nums) =>{
//     let set = new Set(nums);
//    let k = Math.max(...nums);{
//     while(k>0){
//         if(set.has(-k) && set.has(k)){
//             return k;
//         }else{
//             k--;
//         }
//     }
//    }
//     return set.size;

// let count = [1,2,5,9,6,8,7];
// let countSet = new Set(count);
// console.log(countSet);
// count.forEach()



// const findMax =(nums)=>{
//     let k = Math.max(...nums);
//     let findk = new Set(nums);
//     while(findk.has(k)&&findk.has(-k)){
//         return k;
//     }
//     return -1;

//PROMISE CHAINS
// const getData = (data)=>{
//         return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("Data=",data)
//         resolve("data printed successfully");
//         },4000)
        
//     })
// }
// console.log("fetching data1...")
// getData(1).then((res)=>{
//     console.log(res);
//     setTimeout(()=>{
//          console.log("fetching data2...")
//     },2000)
//     getData(2).then(()=>{
//         console.log(res)
//     })
    
// })

//ASYNC-AWAIT
// (async function gettingData(){
//     console.log("getting data1...")
//      await getData(1);
//      console.log("getting data2...")
//      await getData(2);
//      console.log("getting data 3...")
//      getData(3).then((res)=>{
//           console.log(res);
//      })
// })();

//API
// let para = document.querySelector(".text")
// const URL = "https://api.jikan.moe/v4/anime?q=%E6%96%B0%E4%B8%96%E7%B4%80&sfw"
// async function getFacts(){
//     console.log("getting data...")
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//    para.innerText=data.data[0].synopsis
   
// }

// getFacts();

