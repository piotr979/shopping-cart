import classes from './Button.module.css';

const Button = (props) => {

    return (
        <button onClick={props.onClick} className={ `${classes[props.buttonType]} `}>{props.text}</button>
    )
}

export default Button;