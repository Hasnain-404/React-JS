import React, { useState } from 'react'

const App = () => {

  const [color, setcolor] = useState('#000')
  return (
    <div className=' h-screen p-4' style={{ backgroundColor: color }}>
      <div className='flex justify-center items-center h-8 bg-white gap-2 p-6 w-[99vw] rounded-md absolute bottom-1 left-1'>
        <button onClick={() => { setcolor("red") }} className=' bg-red-500 p-1 rounded-lg text-white w-19'>Red</button>
        <button onClick={() => { setcolor("yellow") }} className=' bg-yellow-500 p-1 rounded-lg text-white w-19'>Yellow</button>
        <button onClick={() => { setcolor("green") }} className=' bg-green-500 p-1 rounded-lg text-white w-19'>Green</button>
        <button onClick={() => { setcolor("blue") }} className=' bg-blue-500 p-1 rounded-lg text-white w-19'>Blue</button>
        <button onClick={() => { setcolor("indigo") }} className=' bg-indigo-500 p-1 rounded-lg text-white w-19'>Indigo</button>
        <button onClick={() => { setcolor("purple") }} className=' bg-purple-500 p-1 rounded-lg text-white w-19'>Purple</button>
        <button onClick={() => { setcolor("pink") }} className=' bg-pink-500 p-1 rounded-lg text-white w-19'>Pink</button>
      </div>
    </div>
  )
}

export default App