document.addEventListener('DOMContentLoaded', event=>{
    // cookies

    const btnCarrito = document.querySelector('#btnCarrito');

    btnCarrito.addEventListener('click', event =>{
        
        const carrito = document.querySelector('#carrito');
        if(carrito.style.display == '') {
            carrito.style.display == 'block';
        } else {
            carrito.style.display == '';
        }
    });
});
