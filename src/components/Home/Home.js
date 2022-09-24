import React, {useEffect, useState} from 'react';
import {getList} from '../services/list';
import './Home.css';
import Food from '../Food/Food'; 

export default  function Home(){
  const [list, setList] = useState([]);
  const [showSearch, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [matches, setMatches] = useState([]);
  const [{food, showFood}, setFoodDetails] = useState({food: '', showFood: false});

  const showSearchResults = (e) => {
    const wrapper = document.getElementById('search-wrapper');
    setSearchText(e.target.value);
    wrapper.classList.add('fullscreen');
    setSearch(true);
  }
  const hideSearchResults = () =>{
    setSearch(false);
     const wrapper = document.querySelector('#search-wrapper');
     wrapper.classList.remove('fullscreen');
  }

  useEffect(() =>{
    let mounted = true;
    if(mounted){
      let filteredList = searchText.replace(/\s+/g,'') !== '' ?list.filter(i => i.name.toLowerCase().includes(searchText.toLowerCase())) : [];
      setMatches(filteredList);
    }
    return () => mounted =false;
  },[searchText, list]);

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
      <div id = 'search-wrapper'>
        {showSearch && <span onClick = {hideSearchResults}>{'<'}</span>}
        <input id = 'search' autoComplete = 'off' placeholder = 'Search for a Recipe' type = 'search' name = 'q' onChange = {(e) => showSearchResults(e)} onFocus = {(e) => showSearchResults(e)} />
        {showSearch 
           &&
             <div id = 'search-results'>
               <p>{matches.length} Result{matches.length > 1?'s':''}</p>
               {                 matches.map(i =>(
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
        }
      </div>
      <div className = 'h-and-p-wrapper'>
        <h3>Todays pick</h3>
        <p className = 'see-all'> see all</p>
      </div>
      <div className = 'food-wrapper'>
        {
          list.map(i =>(
            <div  className = 'food-details' key = {i.name} onClick = {() => setFoodDetails({food: i, showFood: true})}>
              
              <img src = {i.imageURL} alt ='' className = 'food-image' />
              <h5>{i.name}</h5>
              <p>Chef Samad</p>
              <p>{i.timers.reduce((a,b) => ~~a + ~~b)} mins</p>
            </div>
          ))}
      </div>
      <div>
          {showFood && <Food food = {food} />}
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
               <p>Chef Jamal</p>
               <p>{i.timers.reduce((a,b) => ~~a + ~~b)} mins</p>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
}
