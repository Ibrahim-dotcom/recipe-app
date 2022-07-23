import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';

import './Login.css';

async function loginUser(credentials){
  return fetch('http://localhost:8080/login',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}

export default function Login({setToken}) {
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const navigate = useNavigate();
 
const handleSubmit = async e =>{
  e.preventDefault();
  const tokn = await loginUser({email, password});
  setToken(tokn);
  navigate('/home');
}
  return(
   <div>
     <h1>Log in</h1>
     <p> Enter your details to log into your account</p>
     <form onSubmit = {handleSubmit}>
       <fieldset>

         <legend> Email address </legend>
         <input type = 'email' placeholder = 'example@gmail.com' onChange = {(e) => setEmail(e.target.value)} />
       </fieldset>
       <fieldset>
         <legend> Password </legend>
         <input type = 'password' placeholder = 'input password' onChange = {(e) => setPassword(e.target.value)}/>
       </fieldset>
       <button type = 'submit'>Log In </button>
       <p>----------or Log in with----------</p>
       <div id ='logo-wrapper'>
          <img src = 'images/google.png' className = 'logos' alt = '' />
          <img src = 'images/facebook.png' className = 'logos' alt = ''/>
       </div>
       <p>Dont have an account? <Link to = '/signup'>Sign up</Link> </p>
     </form>
   </div>
  );
}
