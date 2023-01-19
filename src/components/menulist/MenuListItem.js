import { useRef, useContext } from 'react';
import classes from './MenuListItem.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';
import CartContext from "../../store/cart-context";

const MenuListItem = (props) => {

    const cartCtx = useContext(CartContext);

    const amountInputRef = useRef();
    
    const inputHandler = (ev) => {
        ev.preventDefault();
        cartCtx.addItem({
            id: props.id,
            amount: amountInputRef.current.value,
            description: props.description,
            name: props.name,
            price: props.price
        })
        ;
    }
    return (
     <li className={classes.listItem} key={props.id}>
        <div className={classes['listItem__info']}>
        <p className={classes['listItem__name']}>{props.name}</p>
        <p className={classes['listItem__price']}>${props.price}</p>
        </div>
        <div className={classes['listItem__input']}>
        <form onSubmit={inputHandler}>
        <Input
            ref={amountInputRef}
            input={{
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '0'
            }}
        />
        <Button text="add" buttonType="standard"
        />
        </form>
        </div>
     </li>

    )
}

export default MenuListItem;