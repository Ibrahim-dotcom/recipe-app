import React, {useEffect, useState} from 'react';
import {getList} from '../services/list';
import './Home.css';
import NavBar from '../NavBar/NavBar'

export default  function Home(){
  const [list, setList] = useState([]);
  useEffect(()=>{
    let mounted = true;
    getList()
      .then(items =>{
        if(mounted){
          setList(items)
        }
       })
   return () => mounted = false;
  },[]);
  return (
    <div id = 'home-wrapper'>
      <h2>What would you like to cook</h2>
      <input id = 'search' placeholder = 'Search for a Recipe' />
      <div className = 'h-and-p-wrapper'>
        <h3>Todays pick</h3>
        <p className = 'see-all'> see all</p>
      </div>
      <div className = 'food-wrapper'>
        {
          list.map(i =>(
            <div  className = 'food-details' key = {i.name}>
              <img src = {i.imageURL} alt ='' />
              <h5>{i.name}</h5>
              <p>Chef samad</p>
              <p>{i.timers.reduce((a,b) => ~~a + ~~b)} mins</p>
            </div>
          ))}
      </div>
      <div className = 'h-and-p-wrapper'>
        <h3>Popular Recipe</h3>
        <p className = 'see-all'> see all</p>
      </div>
     <div className = 'popular-container'>
       {
         list.reverse().map(i =>(
           <div className = 'popular-food-wrapper' key = {i.name}>
             <img src = {i.imageURL} alt ='' />
             <div className = 'popular-food-details'>
               <h5>{i.name}</h5>
               <p>Chef Ibra</p>
               <p>{i.timers.reduce((a,b) => ~~a + ~~b)} mins</p>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
}
