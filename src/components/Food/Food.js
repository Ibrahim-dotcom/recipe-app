import {React} from 'react';
//import './Food.css'
export default function Food ({food}){
    return(
        <div id = 'food-wrapper'>
            <img src = {food?.imageURL}  alt = '' />
            <div id = 'details'>
                <h2>{food?.name}</h2>
                <table className='timers'>
                    <tr>
                        <td>Prep Time</td>
                        <td>Cook Time</td>
                        <td>Servings</td>
                    </tr>
                    <tr>
                        <td>s
                            {food.timers.slice(0, -1).reduce((a,b) => ~~a + ~~ b) + 'mins'}
                        </td>
                        <td>
                            {food?.timers[food?.timers.length-1]}
                        </td>
                        <td> 8 people</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}