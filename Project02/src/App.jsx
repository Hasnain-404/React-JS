import React from 'react'
import Card from '../Components/Card'

const App = () => {
  return (
    <>
      <div className=' flex'>
        <Card name="Hasnain" currClass="12th" />
        <Card name="Tohid" currClass="10th" />
        <Card name="Jone" currClass="7th" />
      </div>
    </>
  )
}

export default App