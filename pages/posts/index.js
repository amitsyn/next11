import Users from '@/components/Users'
import React from 'react'

const PostList = ({users}) => {
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
                     users.map((item)=><tr key={item.id}>
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
 


export default PostList

export  async function getStaticProps(){
    const res1 = await fetch('https://jsonplaceholder.typicode.com/users')
    const data1 = await res1.json();
    console.log(data1)
        return {
      props:{
        users:data1
      }
    }
  }