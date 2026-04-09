const productsZone=document.querySelector(".products");




products.forEach(product=>{
    
    const productCard = document.createElement("div")

    productCard.classList.add("product")

    
    const name = document.createElement("p")
    
    name.textContent= `nom de l'article: ${product.productName}`

    const price = document.createElement("p")
    
    price.textContent = `prix de l'article: ${product.prix}`

    const cat = document.createElement("p")

    cat.textContent = `categorie de l'article: ${product.categorie}`

    productCard.appendChild(name)
    productCard.appendChild(price)
    productCard.appendChild(cat)

    productsZone.appendChild(productCard)
    
    
})
