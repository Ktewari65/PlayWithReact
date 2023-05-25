import { useState, useRef, useContext } from 'react';
import AuthContext from '../../Store/AuthContext';
import classes from './AuthForm.module.css';

import { useNavigate } from 'react-router-dom';


const AuthForm = () => {
 
const History = useNavigate()

  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setIsLoading] = useState(false)

  

  const authctx = useContext(AuthContext)

  const switchAuthModeHandler = () => {
   
    setIsLogin((preState) => !preState);
  };

  const formSubmitHandler = (event) =>{
   event.preventDefault()
   const email = emailInputRef.current.value
   const password = passwordInputRef.current.value
   setIsLoading(true)
   let url;
   if(isLogin){
       url =  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvtWXRLyikMBCmjDe279EDauebVE9qvAU'
   }
   else{
       url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvtWXRLyikMBCmjDe279EDauebVE9qvAU'
   }
     fetch( url,{
      method: 'POST',
      body: JSON.stringify({
      email:email,
      password:password,
      returnSecureToken: true
    }),
        headers:{
      'Content-Type' : 'Application/json'
     }
    }).then(response =>{
      setIsLoading(false)
      if(response.ok){
       // console.log(response)
       return response.json()
      }
      else{
        return response.json().then((data) =>{
          const errormessage = data.error.message;
       //console.log(errormessage)
          throw new Error(errormessage)
         
        })
        
      }
   })
   .then((data) =>
   {
    authctx.login(data.idToken)
    History('/')
})
   
   .catch((err) => err.message)
  
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formSubmitHandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required   ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          { !isLoading &&<button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading ....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
