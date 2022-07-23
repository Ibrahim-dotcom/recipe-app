import {React, useState} from 'react';
import  {Link} from 'react-router-dom';
import './Intro.css';
export default function Intro() {
  let [showNextButton, setNextButton] = useState(true);
  let [showSignUp, setSignUp] = useState(false);
  function changeIntro(event) {
    document.querySelector('#visible-intro').style.opacity = '0%';
    let intros = document.querySelectorAll('.slide-intro');
    let indicators = document.querySelectorAll('.indicator');
    setTimeout(() => {
      for(let i = 0; i < intros.length; i++){
        if(intros[i].id === 'visible-intro'){
          intros[i].id = '';
          if(event.target.id === 'skip'){
            intros[2].id = 'visible-intro';
            indicators[i].style.backgroundColor = '#ffffff';
            indicators[2].style.backgroundColor = '#ff8100';
            event.target.style.visibility = 'hidden';
            setNextButton(false);
            setSignUp(true);
          }
          else{
            intros[i+1].id = 'visible-intro';
            indicators[i].style.backgroundColor = '#ffffff';
            indicators[i+1].style.backgroundColor = '#ff8100';
          }
          if(i === 1) {
            document.querySelector('#skip').style.visibility = 'hidden';
            setNextButton(false);
            setSignUp(true);
          }
          break;
        }
      }
    }
    ,500);
  }
  return(
    <div id = 'intro-wrapper'>
      <div className = 'skip' id = 'skip' onClick = {(event) => changeIntro(event)}>Skip</div>
      <div className = 'slide-intro' id = 'visible-intro'>
        <img src = 'images/chef1.png' alt = '' />
        <h2>Learn how to cook</h2>
        <p> Get a detailed step to step guide 
            on how to cook different types of food
        </p>
      </div>
      <div className = 'slide-intro'>
        <img src = 'images/chef2.png' alt = '' />
        <h2>Get inspired by Top chefs </h2>
        <p> Recipes and cooking tips made by Top
            chefs are available for you
        </p>
      </div>
     <div className = 'slide-intro'>
        <img src = 'images/chef3.png' alt = '' />
        <h2>Browse Amazing recipe </h2>
        <p> Get inspiration and explore 
            various recipes from different parts
            of the world
        </p>
       
      </div>
      <div className = 'indicator-wrapper'>
        <div className = 'indicator' id ='visible-indicator'></div>
        <div className = 'indicator'></div>
        <div className = 'indicator'></div>
      </div>
      {showNextButton && <button type = 'submit' onClick = {changeIntro}> Next </button>}
      {showSignUp &&
         <>
           <Link to = '/signup'><button type = 'submit'>Create an account</button></Link>
           <Link to = '/login'><button type = 'submit' className = 'plain-button'>Log in</button></Link>
         </>
      }
     
    </div>
  );
}
