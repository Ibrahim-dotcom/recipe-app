import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

import './Signup.css';

async function signupUser(credentials){
  return fetch('http://localhost:8080/signup',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}

export default function Signup({setToken}) {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e =>{
    e.preventDefault();
    const token = await signupUser({fullName, email, password})
    setToken(token);
    navigate('/home');
  }

  return(
   <div id = 'signup-wrapper'>
     <h1>Sign Up</h1>
     <p> Enter your details to create an account</p>
     <form onSubmit = {handleSubmit}>
       <fieldset>
         <legend> Full name </legend>
         <input type = 'text' placeholder = 'Enter your full name' onChange = {(e) => setFullName(e.target.value)}/>
       </fieldset>
       <fieldset>
         <legend> Email address </legend>
         <input type = 'email' placeholder = 'example@gmail.com' onChange = {(e) => setEmail(e.target.value)}/>
       </fieldset>
       <fieldset>
         <legend> Password </legend>
         <input type = 'password' placeholder = 'input password' onChange = {(e) => setPassword(e.target.value)} />
       </fieldset>
       <button type = 'submit'>Sign Up</button>
       <p>----------or sign up with----------</p>
       <div id ='logo-wrapper'>
         <img src = 'images/google.png' className = 'logos' alt = ''/>
         <img src = 'images/facebook.png' className = 'logos' alt = ''/>
       </div>
       <p>Already have an account? <Link to ='/login'>Log in</Link> </p>
     </form>
   </div>
  );
}
