import Button from "./Button"
const Cart = (props) =>{
   // console.log(props)
    return (
         <div>
            <Button onClick={props.onClick}/>
         </div>
    )
}

export default Cart