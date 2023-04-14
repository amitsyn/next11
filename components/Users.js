import React, { useState } from 'react'

const Users = ({myUser}) => {
    // const[data,setData]=useState([])
    console.log(myUser)
  return (
    <div>
      <h1>UserLists</h1>
      <table cellPadding='10px' cellSpacing='10px' border='2'>
        <thead>
             <tr>
                <th>Name</th>
                <th>Useename</th>
                <th>Email</th>
             </tr>
        </thead>
        <tbody>
             { 
                 myUser.map((item)=><tr key={item.id}>
                   <td>{item.name}</td>
                   <td>{item.username}</td>
                   <td>{item.email}</td>
                  
                 </tr>)
             }
        </tbody>
      </table>
      
    </div>
  )
}

export default Users

