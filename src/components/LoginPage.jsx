import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function LoginPage() {
  const [gmail,setGmail] = useState('');
  const [password,setPassword] = useState('');
  const navigation = useNavigate();

  const handleLogin = ()=>{
    const data = reactLocalStorage.getObject('userdata');
    console.log("saved data : ",data);
    if(data.gmail === gmail && data.password === password)
    {
      navigation('/');
    }
    else
    {
      alert("Wrong username and password...")
    }

}
  return (
    <div className='loginMainDiv'>
      <div className='loginDiv'>
        <h2 style={{ color: "white", marginBottom:'20px', fontWeight:800, letterSpacing:'1px' }}>Login Page</h2>
        <form className='fields'>
          <input type='email' placeholder='mail' value={gmail} onChange={(gmail)=>setGmail(gmail.target.value)}/>
          <input type='password' placeholder='password' value={password} onChange={(password)=>setPassword(password.target.value)}/>
          <button onClick={handleLogin} className='loginbtn' style={{backgroundColor:"#54B435",color:"white",fontWeight:800,letterSpacing:'1px'}}>Login</button>
        </form>
        <Link to={'/signup'}>create an account</Link>
      </div>

    </div>
  )
}
