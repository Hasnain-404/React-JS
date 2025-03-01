import React, {useState } from 'react'
import Timer from './components/Timer'


const App = () => {
  const [count, setcount] = useState(0)

  return (
    <>
      < Timer countIS={count} setcountIs={setcount}/>
      <h1>Count is : {count}</h1>
    </>
  )

}

export default App