import React, {useState} from 'react'

function Example() {

    const [name, setName] = useState("hamza");
    const [email, setEmail] = useState("hamza@gmail.com");

  

  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <input type={"text"} placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type={"email"} placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
  )
  }
export default Example;