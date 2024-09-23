import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div>
      <form>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email here' />
        <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password here' />
      </form>
    </div>
  )
}

export default Login
