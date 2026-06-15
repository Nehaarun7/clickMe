let box=document.querySelector("button")
let mov=false  
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