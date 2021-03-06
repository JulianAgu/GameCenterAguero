import React from 'react';
import {useCartContext} from "../../Context/CartContext"
import {NavLink} from 'react-router-dom'
import "./Cart.css"

const Cart = ()=> {
    
    const {cart, totalPrice, removeItem, clearCart} = useCartContext();

    return (
        <div>
            <h1>Carrito</h1>
            <div className="row">
                            <p className="col-xl-2">Producto</p>
                            <p className="col-xl-2">Cantidad</p>
                            <p className="col-xl-2">Precio por unidad</p>
                            <p className="col-xl-2">Precio por cantidad</p>
            </div> 
            {
                cart.length > 0 ?
                <div>
                    {cart.map((product, index) => {
                        return (
                            <>
                          
                            <div key={index} className="row mt-2 mb-2">
                                <img src={product.item.img} className="img-cart" alt="img product"></img>
                                <p className="col-xl-2"><strong>{product.item.title}</strong></p>
                                <p className="col-xl-2">{product.cantidad}</p>
                                <p className="col-xl-2">DL${product.item.price}</p>
                                <p className="col-xl-2">DL${product.item.price * product.cantidad}</p>
                                <button onClick={() => removeItem(product.item.id, product.item.price * product.cantidad, product.cantidad)}>X</button>
                            
                            </div>
                            </>
                        )
                    })}
                    <div className="row">
                    <div className="col-xl-4">
                        <p>Costo total:</p>
                        <p>DL${totalPrice}</p>
                    </div>
                    <div className="col-xl-4">
                    {cart.length > 0 && <button className="btn btn-success btn-color" onClick={clearCart}>Vaciar carrito</button>}
                    </div>
                    <NavLink to="/Store">
                        <button className="btn btn-success btn-color">Volver</button>
                    </NavLink> 
                    <div>
                     <NavLink to="/Checkout">
                        <button className="btn btn-success btn-color">Finalizar Compra</button>
                    </NavLink>  
                    </div>
                    </div>
                </div> :
                <>
                    <div className="carritoVacioMensaje">
                        <p>El carrito est?? vac??o</p>
                        <NavLink to="/Store">
                        <button className="btn btn-success btn-color">Volver</button>
                        </NavLink> 
                    </div>
                </>
            }
        </div>
    )
}

export default Cart;