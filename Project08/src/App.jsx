import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import ChildA from './components/ChildA';

let user = createContext()

const App = () => {
    const[userName,setUserName] = useState({name:"Husnain"})
  return (
    <>
        <user.Provider value={userName}>
            <ChildA />
        </user.Provider>

    </>
  )
}

export default App
export {user}