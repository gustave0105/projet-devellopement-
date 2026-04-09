// const h1 = document.querySelector(".titre")

// const span= document.createElement("span")

// const text = document.createTextNode(" gustave")

// h1.appendChild(span)

// span.appendChild(text)


// const list = document.querySelector(".list")

// const li = document.createElement("li")

// const litext = document.createTextNode("samsung")

// list.appendChild(li)

// li.appendChild(litext)


// console.log(list)




const titre = document.querySelector(".titre")
const span = document.createElement("span")
span.textContent=("gustave")

titre.appendChild(span)

const list = document.querySelector(".list")

const marques = ["samsung", "itel", "tecno", "iphone", "samsung" , "samsung" , "david"]

marques.forEach(function(x){
    const li = document.createElement("li")
    li.textContent= x 
    list.appendChild(li)
})
console.log(marques);






