import {React} from 'react';
import './Food.css'
export default function Food ({food}){
    return(
        <div id = 'food-wrapper'>
            <div className='food-img-container'>
            <img src = {food?.imageURL}  alt = '' />
            <span className='back-button'>&lt</span>
            </div>
            <div id = 'details'>
                <h2>{food?.name}</h2>
                <table className='timers'>
                    <tr>
                        <td>Prep Time</td>
                        <td>Cook Time</td>
                        <td>Servings</td>
                    </tr>
                    <tr>
                        <td>
                            {food.timers.slice(0, -1).reduce((a,b) => ~~a + ~~b) + ' mins'}
                        </td>
                        <td>
                            {food?.timers[food?.timers.length-1] + ' mins'}
                        </td>
                        <td> 4 people</td>
                    </tr>
                </table>
                <h2>Ingredients</h2>
                <ul>
                    {food['ingredients'].map((ingredient) => {

                        let name = ingredient?.name;
                        let quantity = ingredient?.quantity;

                       return(

                        <li key = {name}> 
                            {(/^\d+$/.test(quantity) ? `${quantity} `: `${quantity} of `) + name}
                        </li>
                       ); 
                          
                    })}
                </ul>

                <h2>Preparation</h2>
                {
                    food.steps.map( (step, index) =><div key={step} className = 'steps'>
                        <h2> STEP {index + 1}</h2>
                        <p>{step}</p>

                    </div>)
                }
                <button>Watch Video</button>
                <br />
               <button className='plain-button'>view rating</button>
            </div>
        </div>
    )
}