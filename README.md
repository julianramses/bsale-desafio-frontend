
# Front end del desafío Bsale

Front end del desafio bsale, consiste en consumir una API REST previamente hecha.
Se utilizó Express.js solamente para facilitar el deploy, ejercicio realizado en Javascript Vanilla.





Plantilla HTML con Jade en index.jade
```jade
extends layout

block content
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.fixed-top
    div.container
      a.navbar-brand(href="#") Bsale Front-End Test 
      form.form-inline.my-2.my-lg-0
  div.container
    div#productos.row
```




API REST consumida en javascript Vanilla, usando metodo fetch

```javascript

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
```
Lo que nos retorna a los datos ordenados consumidos desde la API REST



