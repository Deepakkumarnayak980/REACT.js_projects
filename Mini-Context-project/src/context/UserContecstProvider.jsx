// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import UserContext from "./UserContext";

// eslint-disable-next-line react/prop-types
const UserContextProvider =({children}) =>{
    const [user,setUser ]= useState(null)
     return(
 <UserContext.Provider value={{user,setUser}}>
    {children}
 </UserContext.Provider>
     )
}

export default UserContextProvider