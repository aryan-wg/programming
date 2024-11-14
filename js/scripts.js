button = document.getElementById("button")
// setTimeout(()=>{
//     console.log("Timeout over")
// },1000)
button.addEventListener("click",()=>{
    console.log("button is clicked")
})
sum = 9
for(let i = 0 ; i<9999 ; i++){
    console.log("doing something")
   sum = Math.pow(sum,i) 
}

