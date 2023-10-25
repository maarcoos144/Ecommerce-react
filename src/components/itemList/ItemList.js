import './ItemList.css'
import Item from '../../Item/Item'

const ItemList = ({ products }) => {
   // console.log('Productos en ItemList:', products);
  
    return (
      <div className='ListGroup'>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
      </div>
    );
  };

export default ItemList 