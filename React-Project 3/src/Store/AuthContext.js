import React from "react";



const AuthContext = React.createContext({
 items:[],
 addItem: (item) =>{},
 deleteItem: ()=>{}
})

export default AuthContext