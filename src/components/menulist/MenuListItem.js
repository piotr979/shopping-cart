import classes from './MenuListItem.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';
const MenuListItem = (props) => {
    return (
     <li className={classes.listItem}>
        <div className={classes['listItem__info']}>
        <p className={classes['listItem__name']}>{props.name}</p>
        <p className={classes['listItem__price']}>${props.price}</p>
        </div>
        <div className={classes['listItem__input']}>
        <Input />
        </div>
     </li>

    )
}

export default MenuListItem;