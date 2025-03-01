import React from 'react'

const App = () => {

  function submit(e) {
    e.preventDefault()
    alert("Form is go for submit but not submit")
  }

  function inputChange(e) {
    console.log(e.target.value);
    
  }

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" onChange={inputChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App