import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Axios() {
    const[user,setUser]=useState([]);
    useEffect(()=>{
        const API="https://jsonplaceholder.typicode.com/users"
        axios.get(API)
        .then(res=>{
            console.log(res.data)
            setUser(res.data)
        },[])
        .catch(err=>console.log(err))
    })
  return (
    <div>
      <h2>FetchPost</h2>
      <table className='table'>
        <thead>
            <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {user.map((dis,ind)=>
            <tr>
                <td> {ind+1}</td>
                <td>{dis.name}</td>
                <td>{dis.email}</td>
                <td>{dis.website}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}
