import ShoppingCard from './ShoppingCard';
import ShoppingCartListItem from './ShoppingCartListItem';
import classes from './ShoppingCartList.module.css';
import Button from '../UI/Button';
import { v4 as uuidv4 } from 'uuid';

const ShoppingCartList = (props) => {

    const list = [
        {
            id: 'm1',
        name: "Food",
        price: 10
        }
    ]
    return (
        <ShoppingCard handleModal={props.handleModal}>
            <div className={classes['shopping-cart']}>
                <h3>Shopping cart</h3>

                <ul>
                    { list.map( item => (
                        <ShoppingCartListItem key={uuidv4()} price={item.price} name={item.name} />
                    ))}
                </ul>
                <div className={classes['shopping-cart__buttons']}>
                    <Button text="Close" buttonType="alert" onClick={props.handleModal} />
                    <Button text="Order" buttonType="standard" />
                </div>
            </div>
        </ShoppingCard>
    )
}

export default ShoppingCartList