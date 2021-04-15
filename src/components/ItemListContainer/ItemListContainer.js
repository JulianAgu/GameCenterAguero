import {ItemList} from '../ItemList/ItemList'
import React,{Component} from 'react';

ItemList.map(item => console.log("Nombre del producto ", item.title));


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
                products: ItemList,
            })
        }, 2500)

    }
    render() {
      return (
        <div>
          <h2>Productos</h2>
          <ul>
            {this.state.products.map(function (products) {
              return (
                <li key={products.id}>
                  {products.title}  - {products.price}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
}




// export default function ItemListContainer({greeting}){
//     return (
//         <div>
//             {greeting}
            
//         </div>

//     )

// };