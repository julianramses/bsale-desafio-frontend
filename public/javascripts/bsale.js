(async function(){
    const pelement = document.getElementById('productos')
    const req = await fetch('http://bsaleapiv5.herokuapp.com/productos/productos/')
    const productos = await req.json() 
    productos.productos.forEach(producto => {
        let template = 
        `<img class="card-img-top img-thumbnail"  src="${producto.url_image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.name}</h5>
                <p class="card-text">Precio: $${producto.price}</p>
                DESCUENTO ${producto.discount}%<span class=""badge badge-danger"></span>
            </div>`
       let element = document.createElement('div')
       element.className = "card"
       element.style = "width: 18rem;"
       element.innerHTML = template
       pelement.append(element)
    });
})()
