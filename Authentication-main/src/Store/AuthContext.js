import React, { useState } from "react"
//import { useNavigate } from "react-router-dom"

const AuthContext = React.createContext({
    token: '',
    isLogin:false,
    login: (token)=>{ },
    logout: () =>{}
})

export const AuthProvider = (props) =>{

    //const navigation = useNavigate()
    const [token, setToken] = useState(null)

    const userIsLoggenIn = !!token

    const loginHandler = (token) =>{
        console.log(token)
        setToken(token)
  }

   const logoutHandler = () =>{
      setToken(null)
      
  }
        const obj = {
           token:token,
           isLogin:userIsLoggenIn,
           login: loginHandler,
           logout: logoutHandler
        }


    return <AuthContext.Provider   value = {obj}>{props.children}</AuthContext.Provider>
}

export default AuthContext