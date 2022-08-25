import {Link} from 'react-router-dom';
import './NavBar.css';
export default function NavBar(){
  return(
    <div id = 'navbar-wrapper'>
      <img src = 'images/home-icon.png' alt = '' / >
      <img src = 'images/explore-icon.png' alt = '' / >
      <Link to = '/post'><img src = 'images/post-icon.png' alt = '' / ></Link>
      <img src = 'images/heart-icon.png' alt = '' / >
      <img src = 'images/profile-icon.png' alt = '' / >
    </div>
 );
}
