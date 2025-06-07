// form 
let formEL =  document.querySelector("#form");
let bodyEl =  document.querySelector("#body");
let msgPop =  document.createElement("div");
let selectEL = document.querySelector("#msgVal");
let inpEL = document.querySelector("#msg");
// let msgEnter = document.querySelector("#msg");
// let btnEL = document.querySelector("#btn");
// bodyEl.prepend(msgPop);
// prepend method 
// console.dir(msgPop);
// console.dir(formEL);

formEL.addEventListener("submit",(ev)=>{
ev.preventDefault();
console.dir(inpEL);
if (selectEL.value === "normal"){
     msgPop.style.height = "100px";
     msgPop.style.width = "100px";
     bodyEl.prepend(msgPop);
     msgPop.innerText =  inpEL.value ;
     msgPop.style.color =  "black";

}
else if (selectEL.value === "warning"){
     msgPop.style.height = "100px";
     msgPop.style.width = "100px";
     bodyEl.prepend(msgPop);
     msgPop.innerText =  inpEL.value ;
     msgPop.style.color = "brown";
}
else if (selectEL.value ==="info"){
    msgPop.style.height = "100px";
     msgPop.style.width = "100px";
     bodyEl.prepend(msgPop);
       msgPop.innerText =  inpEL.value ;
      msgPop.style.color = "blue"; 
}
else if (selectEL.value === "success"){

    msgPop.style.height = "100px";
     msgPop.style.width = "100px";
     bodyEl.prepend(msgPop);
       msgPop.innerText =  inpEL.value ;
     msgPop.style.color = "green";
}
else if (selectEL.value === "error"){

     msgPop.style.height = "100px";
     msgPop.style.width = "100px";
     bodyEl.prepend(msgPop);
     msgPop.innerText =  inpEL.value ;
     msgPop.style.color = "red";
}
})


