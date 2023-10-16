import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Signup() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [gmail,setGmail] = useState('');
    const navigation = useNavigate();

const handleSignup = ()=>{
    if(username !== '' && gmail !== '' && password !== '')
    {
        reactLocalStorage.remove('userdata');
        reactLocalStorage.setObject('userdata',{'username':username,'gmail':gmail, 'password':password});
        console.log("data saved successfully");
        navigation('/');
    }
    else
    {
        alert("each field required...");
    }
    

}

  return (
    <div className='loginMainDiv'>
      <div className='loginDiv'>
        <h2 style={{ color: "white", marginBottom:'20px', fontWeight:800, letterSpacing:'1px' }}>Signup Page</h2>
        <form className='fields'>
          <input type='text' placeholder='username' value={username} onChange={(username)=>setUsername(username.target.value)}/>
          <input type='text' placeholder='gmail' value={gmail} onChange={(gmail)=>setGmail(gmail.target.value)}/>
          <input type='password' placeholder='password' value={password} onChange={(password)=>setPassword(password.target.value)}/>
          <button onClick={handleSignup} className='loginbtn' style={{backgroundColor:"#54B435",color:"white",fontWeight:800,letterSpacing:'1px'}}>Signup</button>
        </form>
      </div>
      </div>
  )
}
