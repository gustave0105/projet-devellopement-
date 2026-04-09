const nom = document.getElementById("nom");
const mail = document.getElementById("mail");
const button = document.getElementById("button");
const diplome = document.getElementById("diplome");

const identiter = document.querySelector(".identiter");
const adresse = document.querySelector(".adresse");
const diplomes = document.querySelector(".diplomes")


button.addEventListener("click",() => {
    identiter.textContent=nom.value 
    adresse.textContent=mail.value
    diplomes.textContent=diplome.value
});




