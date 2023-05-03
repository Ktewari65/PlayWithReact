
import React, { useState, useEffect, useReducer, useContext , useRef} from 'react';
import AuthContext from '../../Store/AuthContext';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from './Input';
const passwordReducer = (state,action) =>{
  console.log(state)
 // console.log(action.isValid)
  if(action.type==='PASSWORD'){
    return {value:action.val,  isValid:action.val.trim().length >6}
  }
  if(action.type==='BLUR1'){
    return{value:state.value, isValid:state.value.trim().length >6}
  }
  return{value:'', isValid:false}
}

const emailReducer = (state,action) =>{
//console.log(action.value)
console.log(state)
  if(action.type==='USER_INPUT'){
   
    return{value: action.val, isValid:action.val.includes('@')}
  }
  if(action.type==='blur'){
    return { value: state.value, isValid:state.value.includes('@')}
  }
  return {value: '', isValid: false};
}; 

const Login = () => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
 // const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[emailState,dispatchEmail]=useReducer(emailReducer, {value: '' , isValid: false})

  const[passwordState,dispatchPassword] = useReducer(passwordReducer, {value:'', isValid:false })

  const ctx = useContext(AuthContext)
 
  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailInputRef= useRef()
  const passwordInputRef= useRef()

  const emailChangeHandler = (event) => {
   // setEnteredEmail(event.target.value);

   dispatchEmail({type:'USER_INPUT', val: event.target.value})

   setFormIsValid(
    event.target.value.includes('@') &&  passwordState.isValid
  );
  };

  const passwordChangeHandler = (event) => {
   // setEnteredPassword(event.target.value);
   // console.log(event.target.value)

   dispatchPassword({type:'PASSWORD' , val:event.target.value})

    setFormIsValid(
      emailState.isValid   && event.target.value.trim().length > 6
    );

   
  };

  const validateEmailHandler = () => {
  //  setEmailIsValid(emailState.isValid);
  dispatchEmail({type:'blur'});
  };

  const validatePasswordHandler = () => {
   // setPasswordIsValid(passwordState.value.trim().length > 6);
   dispatchPassword({type:'BLUR1'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
    ctx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailState.isValid){
      emailInputRef.current.activate()
    }
    else{
      passwordInputRef.current.activate()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <Input type ='email'
       id='email'
       label='Email-Id'
       value={emailState.value}
       onChange={emailChangeHandler}
       onBlur={validateEmailHandler}
       isValid={emailState.isValid} 
       ref={emailInputRef}/>

      <Input type ='password'
       id='password'
       label='Password'
       value={passwordState.value}
       onChange={passwordChangeHandler}
       onBlur={validatePasswordHandler}
       isValid={passwordState.isValid} 
       ref={passwordInputRef}/>
      
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}  disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
