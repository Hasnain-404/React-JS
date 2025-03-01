import React, { useState } from 'react'
import Button from './components/button'

const App = () => {

  const [count, setcount] = useState(0)

  function clickeToIncr(){
    setcount(count+1)
  }

  return (
    <>
      <Button fxn={clickeToIncr} txt = "click to incr" count = {count}/>
    </>
  )
}

export default App