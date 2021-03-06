import React from 'react';
import './ItemCount.css'; 
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";




const ItemCount = ({ stock, initial, onAdd })=>{
    
    const[count,setCount] = React.useState(initial);
    
    const [showing, setShowing] = React.useState(false);


    const countAdd = () =>{
        if (count < stock){
            setCount(count+1);
        }
    }

    const countRemove = () =>{
        if (count > initial){
            setCount(count-1);
        }
    
    }
    

    return(
        <>
        <div className = "d-flex count">
        <IoIosRemoveCircleOutline onClick = {countRemove}></IoIosRemoveCircleOutline>
            <p>{count}</p>
        <IoMdAddCircleOutline onClick ={countAdd}></IoMdAddCircleOutline>    
        </div>
   <button onClick={(e) => onAdd(e, count)} className="btn btn-color">Agregar al Carrito {count}</button>
    

        </>
    
        
    )
 }
export default ItemCount;