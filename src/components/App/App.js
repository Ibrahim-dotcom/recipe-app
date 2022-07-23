import {React, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import LandingPage from '../LandingPage/LandingPage';
import Home from '../Home/Home'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const [token, setToken] = useState();
    return (
      <div>
        <Routes>
          <Route path = '/' element = {<LandingPage />} />
          <Route path = '/login' element = {<Login setToken = {setToken}/>} />
          <Route path = '/signup' element = {<Signup setToken = {setToken} />} />
          <Route element = {<ProtectedRoute token = {token}/>}>
            <Route path = '/Home' element ={<Home/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
