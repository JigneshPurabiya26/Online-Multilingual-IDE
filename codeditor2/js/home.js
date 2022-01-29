// guide hide and show feature
let hide=document.getElementById("li1");
hide.addEventListener("click",hideshow);
function hideshow(){
    let a = document.querySelector(".a");
    if(a.style.display!="none"){
        a.style.display = "none";
        hide.innerHTML =  `<i class="fas fa-plus-circle secondaryColor"></i>`;
    }
    else{
        a.style.display = "block";
        hide.innerHTML =  `<i class="fas fa-minus-circle secondaryColor"></i>`;
    }
}

let hide2=document.getElementById("li2");
hide2.addEventListener("click",hideshow2);
function hideshow2(){
    let b = document.querySelector(".b");
    if(b.style.display!="none"){
        b.style.display = "none";
        hide2.innerHTML =  `<i class="fas fa-plus-circle secondaryColor"></i>`;
    }
    else{
        b.style.display = "block";
        hide2.innerHTML =  `<i class="fas fa-minus-circle secondaryColor"></i>`;
    }
}

let hide3=document.getElementById("li3");
hide3.addEventListener("click",hideshow3);
function hideshow3(){
    let c = document.querySelector(".c");
    if(c.style.display!="none"){
        c.style.display = "none";
        hide3.innerHTML =  `<i class="fas fa-plus-circle secondaryColor"></i>`;
    }
    else{
        c.style.display = "block";
        hide3.innerHTML =  `<i class="fas fa-minus-circle secondaryColor"></i>`;
    }
}
