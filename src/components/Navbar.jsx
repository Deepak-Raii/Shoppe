import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigation = useNavigate();
  const handleLogin = ()=>{
    navigation('/login');
  }

  console.log("logedin hai kya : ",isLoggedIn);

  useEffect(()=>{
    const data = reactLocalStorage.getObject('userdata');
    console.log("Userdata hai : ", data)
    if(data)
    {
      setIsLoggedIn(true);
      setUsername(data.username);
    }
    else
    {
      setUsername('');
    }
  },[navigation]);

  const handleSignout = () =>{
    reactLocalStorage.remove('userdata');
    setIsLoggedIn(false);
  }


  return (
    <div className='navbar container'>
        <p className='logo'>Shopee</p>
            <div>
            <input type='text' placeholder='search' style={{padding:"0px 1vw", marginTop:'5px', borderRadius:'0px', border:'1px solid gray',  backgroundColor:"whitesmoke", color:"black", width:'50vw', height:'5vh'}}/>
            <img className='img-fluid' style={{height:"5vh", width:"2.5vw", marginLeft:"-3px", marginBottom:'2px', border:'1px solid gray', cursor:"pointer"}} src={'https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg'}/>
            </div>
        <img className='img-fluid' style={{height:"5vh",width:"3vw", cursor:"pointer"}} src={'https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart.png'}/>
        {isLoggedIn === true ? (<button onClick={handleSignout} className='btn'>{username ? username : setIsLoggedIn(false)}</button>) : (<button onClick={handleLogin} className='btn'>Login</button>)}
    </div>
  )
}
