import { createContext, useState } from "react";


// 1. create Context
export const userContext = createContext()

const UsersContextProvider = ({children})=> {


  // 2. shared data
  const [state, setState] = useState([{email:'admin@1',password:'admin'}]);


  return (

    //4. wrap contxt with children
    <userContext.Provider value={[state,setState]}>
      {children}
    </userContext.Provider>
  );
}


export default  UsersContextProvider