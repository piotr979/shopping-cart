import classes from './ShoppingCartListItem.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';
const ShoppingCartListItem = ({ price, name}) => {
    return (
        <li className={classes.listItem}>
        <div className={classes['listItem__info']}>
        <p className={classes['listItem__name']}>{name}</p>
        <p className={classes['listItem__price']}>${price}</p>
        </div>
        <div className={classes['listItem__input']}>
        <Input />
        </div>
     </li>
    )
}

export default ShoppingCartListItem;