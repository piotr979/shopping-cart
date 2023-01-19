import { useContext } from 'react';
import ShoppingCard from './ShoppingCard';
import ShoppingCartListItem from './ShoppingCartListItem';
import classes from './ShoppingCartList.module.css';
import Button from '../UI/Button';
import { v4 as uuidv4 } from 'uuid';
import CartContext from '../../store/cart-context';

const ShoppingCartList = (props) => {

    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const removeItem = (id) => {
        cartCtx.removeItem(id);
    }
    const addToAmount = (item) => {
        cartCtx.addItem( {
            ...item,
            amount: 1
        }
        )
    }
    return (
        <ShoppingCard handleModal={props.handleModal}>
            <div className={classes['shopping-cart']}>
                <h3>Shopping cart</h3>

                <ul>
                    { cartCtx.items.map( item => (
                        <ShoppingCartListItem 
                           key={uuidv4()} 
                           item={item}
                           amount={item.amount}
                           removeItem={removeItem.bind(null, item.id)} 
                           addToAmount={addToAmount.bind(null, item)}
                           />
                    ))}
                </ul>
           <div className={classes['shopping-cart__buttons']}>
                    <Button text="Close" buttonType="alert" 
                    onClick={props.handleModal} />
                     { hasItems &&  <Button text="Order" buttonType="standard" />
                }
                </div>
            
            </div>
        </ShoppingCard>
    )
}

export default ShoppingCartList