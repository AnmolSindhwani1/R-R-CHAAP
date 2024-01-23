import React,{useState} from 'react'
export default function Fetch() {
  const[post,setPost]=useState([]);
    const fetchhandler=()=>{
        const fetchhandler=()=>{
            const API="https://jsonplaceholder.typicode.com/photos"
            fetch(API)
            .then(res=>res.json())
            .then(res=>{
              setPost(res)
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <h2>FetchPost</h2>
      <button onClick={fetchhandler}>GetFetch</button>
      <div>
        {
          post.map(d=>{
            <div>
              <h4>{d.title}</h4>
              <p>{d.id}</p>
              <hr/>
              </div>
          })
        }
      </div>
    </div>
  )
}
