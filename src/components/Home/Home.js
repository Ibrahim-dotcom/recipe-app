import React, {useEffect, useState} from 'react';
import {getList} from '../services/list';
import './Home.css';

export default  function Home(){
  const [list, setList] = useState([]);
  const [showSearch, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [matches, setMatches] = useState(['no match found !']);

  const showSearchResults = (e) => {
    const wrapper = document.getElementById('search-wrapper');
    setSearchText(e.target.value);
    wrapper.requestFullscreen();
    setSearch(true);
  }
  const hideSearchResults = () =>{
    document.exitFullscreen();
    setSearch(false);
  }

  useEffect(() =>{
    let mounted = true;
    if(mounted){
      let filteredList = list.filter(i => i.name.includes(searchText));
      filteredList != []?setMatches(filteredList) : setMatches(['no match found!']); 
    }
    return () => mounted =false;
  },[searchText]);

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
        <input id = 'search' placeholder = 'Search for a Recipe' type = 'search' name = 'q' onChange = {(e) => showSearchResults(e)} onFocus = {(e) => showSearchResults(e)} onBlur = {hideSearchResults}/>
        {showSearch 
           &&
             <div id = 'search-results'>
               {
                 matches.map(i =>(
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
            <div  className = 'food-details' key = {i.name}>
              <img src = {i.imageURL} alt ='' />
              <h5>{i.name}</h5>
              <p>Chef Samad</p>
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
