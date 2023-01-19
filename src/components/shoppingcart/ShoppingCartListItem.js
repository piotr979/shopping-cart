import classes from './ShoppingCartListItem.module.css';

const ShoppingCartListItem = (props) => {

    const { id, name, description, price, amount } = props.item;

    return (
        <li className={classes.listItem}>
            <div className={classes['listItem__info']}>
                <p className={classes['listItem__name']}>{name}</p>
                <p className={classes['listItem__description']}>{description}</p>
                <p className={classes['listItem__price']}>${price}</p>
            </div>
            <div className={classes['listItem__amount']}>
                <button onClick={props.removeItem}>-</button>
                <button onClick={props.addToAmount}>+</button>
                <p>{props.item.amount}</p>
            </div>
        </li>
    )
}

export default ShoppingCartListItem;