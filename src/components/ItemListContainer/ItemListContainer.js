import {Products} from '../Item/Products'
import React,{Component} from 'react';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';

export default class ItemListContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        products: []
      };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                products: Products,
            })
        }, 2500)

    }
    render() {
      return (
        <div>
          <h2>Productos</h2>
          <ul className="CardContainer">
            {this.state.products.map(function (products) {
              return (
                <div key={products.id}>
                  <ItemList p={products} />
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
}


 





// componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 products: ItemList,
//             })
//         }, 2500)




// export default function ItemListContainer({greeting}){
//     return (
//         <div>
//             {greeting}
            
//         </div>

//     )

// };