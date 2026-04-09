const nbr1 = document.getElementById("nbr1");
const nbr2= document.getElementById("nbr2");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const mntnt = document.getElementById("prctg")
const pourc = document.querySelector(".pourc")
const but = document.querySelector(".but")
const resultat = document.getElementById("resultat");


btn.addEventListener("click",()=>{
    const a = Number(nbr1.value);
    const b = Number(nbr2.value);
    resultat.textContent= a+b;

});


 btn2.addEventListener("click",(e)=>{
    e.preventDefault();
 const a = Number(nbr1.value);
 const b = Number(nbr2.value); 
 resultat.textContent=a-b;

 })

 btn3.addEventListener("click",()=>{
     const a = Number(nbr1.value);
 const b = Number(nbr2.value); 
    resultat.textContent=a*b
    
    
 })

 but.addEventListener("click",()=>{
    const c = Number(prctg.value)
    pourc.textContent= c*10/100
 })






 





// const msg = document.getElementById("msg")
// const button = document.querySelector(".button")

// button.addEventListener("click",()=>{
//     msg.textContent="bonjour monsieur"
// })





