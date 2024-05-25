import React, {useState, useEffect} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
   const navigate = useRouter();
  
   function check(){
    let access =localStorage.getItem('accessToken')
    let isLoggedIn = false;
    if (access !== null) {
      isLoggedIn = true;  
    
  }
  return isLoggedIn;
  }
  
  useEffect(() => {
    let loginCheck= check()
   if (loginCheck == true) {
     navigate.push("/newpost");
   }
   else{
    navigate.push("/login")
   }
  }, []);
  
  
    
   const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://api.astranova.co.in/login', { email,password})
    .then(res=> {if(res.data.Login){
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('logCheck', res.data.Login)
      navigate.push("/newpost")
      
    }
    else {
      navigate.push('/')
    }
  })
    .catch(err=>console.log(err));
  }
  
    axios.defaults.withCredentials = true;
  
    return (
      <div className='app login-page'>
        <div className=''>
      <div className='auth'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='email' onChange={(e)=> setEmail(e.target.value)} placeholder='username'/>
          <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
          <button type='submit' className='mb-8'>Login</button>
          {/* <p style={{textAlign:'center',color:"red"}}>This is an error</p> */}
          {/* <span style={{textAlign:"center"}}>Don't you have an account ? <Link className='links' to="/register">Register</Link></span> */}
        </form>
       </div>
       </div>
       </div>
    )
  }
  
  export default login