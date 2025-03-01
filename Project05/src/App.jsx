import React, { useState } from 'react'
import LogoutBtn from './components/LogoutBtn'
import LoggingBtn from './components/LoggingBtn'

const App = () => {
  const [isLogging, setLoggout] = useState(true)
  
  if (isLogging) {
    return(
      <LogoutBtn />
    )
    
  }else{
    
      <LoggingBtn />          
  }
}

export default App