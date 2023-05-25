import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../Store/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {

  const navigate = useNavigate()

const authCtx = useContext(AuthContext)
  const changePasswordRef = useRef()

  const formSubmitHandler = (event) =>{
  event.preventDefault()
   const newPassword = changePasswordRef.current.value
   //console.log(newPassword)

   fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBvtWXRLyikMBCmjDe279EDauebVE9qvAU',{
    method: 'POST',
    body:JSON.stringify({
       idToken: authCtx.token,
       password:newPassword,
       returnSecureToken:false
    }),
    header :{
      'Content-Type' : 'Application/Json'
    }
   }).then((response)=>{
     navigate('/')
   })
  }


  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'  ref={changePasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
