// let a = new Promise(function(res,rej){
//     return res("sabse pehle ghar par aao")
// })

// let p2=a.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("gate kholo aur gate lagao")
//     })
// })

// let p3=p2.then(function(data){
//     console.log(data)
//     return new Promise(function(res,rej){
//         return res("yey")
//     })
// })

// p3.then(function(data){
//     console.log(data)
// }) 
// let a = document.querySelector("h1")

// a.addEventListener("click",function(){
//     a.innerHTML="Mayuri Ingle"
//     a.style.color = "red"
   
// #BULB
// })
// var flag = 0
// var bulb = document.querySelector("#bulb")
// var b = document.querySelector("button")
// b.addEventListener("click",function(){
//     if(flag==0){
//         bulb.style.backgroundColor = "yellow"
//     console.log("clicked")
//     flag = 1
//     }else{
//         bulb.style.backgroundColor = "transparent"
//     console.log("clicked")
//     flag = 0
//     }
    
// })

// let off = document.querySelector("#bulb")
// let btn = document.querySelector("#off")

// btn.addEventListener("click",function(){
//     bulb.style.backgroundColor = "black";
// })


// function rgb(color){
// this.size = 12;
// this.shape = "circle";
// this.color = color;
// this.pressable = "yes";
// }

// var a = new rgb("red");
// var ab = new rgb("green");
// var abc = new rgb("yellow");

var human = {
    canFly:false,
    canTalk:true,
    canwalk:true,
    hasEmotions:false
}

var Student = {
    solveJsQuestions : true,
    canMakeAmazingWebsite:true,
    worldClassAwardedWebsite:true,
    oye:true
}

Student.__proto__ = human;