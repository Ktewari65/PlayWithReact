import classes from './Button.module.css'
const Button = (props) =>{
return(
    <header className={classes.btn}>
        <button onClick={props.onClick}>
            <div>Cart</div>
            <span>0 </span>
        </button>
    </header>
)

}
 export default Button