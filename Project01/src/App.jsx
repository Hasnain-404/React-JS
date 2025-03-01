import React, { useState } from 'react'

const App = () => {

    const [mark, setmark] = useState(10)
    return (
        <>
            <div className=' flex h-screen justify-center items-center'>
                <h1> My Marks is : {mark}</h1> 
                <div className=' flex space-x-4'>
                    <button onClick={ ()=>{setmark(mark + 1)}} className=' bg-amber-500 px-4 py-1 rounded'>INC</button>
                    <button onClick={() => { setmark(mark - 1) }} className=' bg-amber-500 px-4 py-1 rounded'>DEC</button>
                </div>
            </div>
        </>
    )
}

export default App