import {Outlet} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
export default function ProtectedRoute({token}){
  if(!token){
    window.location.assign('/login');
    return;
  }
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}
