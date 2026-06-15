let box=document.querySelector("button")
let mov=false  
let predict=document.querySelector(".predict")
box.addEventListener("mouseover",function(){  
    if(!mov){
        box.style.marginLeft ="100px"
        mov=true
    }      
    else{
        box.style.marginLeft ="0px"
        mov=false
    }
})
setTimeout(function(){
    box.style.display='none'
    predict.innerText="sorryy....."
},5000)