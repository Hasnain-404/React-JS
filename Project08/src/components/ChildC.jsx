import React from 'react'
import { user } from '../App'
import { useContext } from 'react'

const ChildC = () => {
    let userDetail = useContext(user)
  return (
    <div>
        <h1>Name is : {userDetail.name}</h1>
    </div>
  )
}

export default ChildC