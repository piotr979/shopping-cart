import classes from './ShoppingCard.module.css';

const ShoppingCard = (props) => {
    return (
        <div className={classes.backdrop}>
            { props.children }
        </div>
    )
}

export default ShoppingCard;
