import {Outlet, Navigate, useLocation} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
export default function ProtectedRoute({token}){
  const location = useLocation();
  if(!token){
    return <Navigate to = '/login' state = {{prevPath: location.pathname}} />
  }
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}
