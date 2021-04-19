import React, { useState } from 'react'
import './ItemCount.css';
import Button from '@material-ui/core/Button';
import './ItemCount.css';


export const ItemCount = ({stock,initial}) => {
    const[count,setCount] = useState(parseInt(initial));
    
    const countAdder = () => {
        if (count < stock){ 
            setCount(count+1)
        }
    }
    const countDecrease = () => {
        if (count > initial) {
            setCount(count-1)
        }
    }
    const onAdd = () => {
        if (count <= stock) {
            alert(`Has realizado una compra de ${count} producto/s.`)
        }
    }
    return (
        <div className="itemCount-container">
            <p>{count}</p>
            <div className="buttons-container">
                <Button variant="contained" color="primary" onClick={countDecrease}> - </Button>
                <Button variant="contained" color="primary" onClick={countAdder}> + </Button>
            </div>
            <div className="buttons-container">
                <Button onClick={onAdd}>Agregar al Carrito </Button>
            </div>
        </div>
    )
}



