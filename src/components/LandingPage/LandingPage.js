import {React,useState} from 'react';
import './LandingPage.css';

import Intro from '../Intro/Intro';

export default function LandingPage (){
  let [showLoading, setLoading] = useState(true);
  let [showIntro, setIntro] = useState(false);
  function removeLoader() {
    setTimeout(() => {
      setLoading(false);
      setIntro(true);
    },5000);
  }
  removeLoader();
  return (
    <div>
      { showLoading  &&
        <div id = 'loading'>
          <img src = 'images/dish.png' alt = '' />
         <span> Cook's Creation</span>
        </div>
      }
        { showIntro && <Intro />}
    </div>
  );
}

