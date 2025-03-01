import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className=' bg-blue-400 text-white p-4 m-4 rounded-lg shadow-lg w-50'>
                <div>
                    <img className=' rounded-2xl' src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h1>Name : {props.name}</h1>
                    <h2>Class : {props.currClass}</h2>
                    <p className=' text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>

        </>
    )
}

export default Card