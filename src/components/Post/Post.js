import  React from 'react';
import './Post.css'
export default function Post(){
  return (
    <div id = 'post-wrapper'>
      <h2>Upload Recipe</h2>
     <form>
       <label for = 'video'>
         Add your video
         <input type = 'file' id = 'video' name = 'video' accept = 'video/mp4,video/x-m4v,video/*'/>
       </label>
       <label for = 'cover-image'>
         Upload cover image
         <input type = 'file' id = 'cover-image' name = 'cover-image' accept = ''/>
       </label>
       <fieldset>
         <legend>
          <strong>Name Of Recipe</strong>
         </legend>
         <input type = 'text' placeholder = 'Enter the name of the recipe' name = 'recipe-name' />
       </fieldset>
       <fieldset>
         <input type = 'text' placeholder = 'Preparation Time' name = 'prep-time' className = 'cooking-time'/>
       </fieldset>
       <fieldset>
         <input type = 'text' placeholder = 'Cook Time' name = 'cook-time' className = 'cooking-time'/>
       </fieldset>
       <fieldset>
         <input type = 'text' placeholder = 'Servings' name = 'prep-time' className = 'cooking-time'/>
       </fieldset>
       <hr />
       <h4>Ingredients</h4>
       <fieldset>
         <input type = 'text' placeholder = 'Type in the ingredient'  className = 'cooking-time'/>
       </fieldset>
       <fieldset>
         <input type = 'text' placeholder = 'Type in the ingredient'  className = 'cooking-time'/>
       </fieldset>
       <fieldset>
         <input type = 'text' placeholder = 'Type in the Ingredient' className = 'cooking-time'/>
       </fieldset>
       <div class = 'add' onClick = {(e) => 
                          e.target.insertAdjacentHTML('beforebegin', 
                            "<fieldset><input type = 'text' placeholder = 'Type in the ingredient' class = 'cooking-time'/></fieldset>")
       }>
         + Add
       </div>
       <h4>Preparation</h4>
       <hr />
       <label for = '1' className = 'steps'>
         Step 1
       </label>
       <textarea id = '1'></textarea>
       <label for = '2' className = 'steps'>
         Step 2
       </label>
       <textarea id = '2'></textarea>
       <label for = '3' className = 'steps'>
         Step 3
       </label>
       <textarea id = '3'></textarea>
       <div class = 'add' onClick = {
 			    (e) =>{
			       let nextStep = String(document.querySelectorAll('.steps').length +1);
   		               alert(nextStep);
      			       e.target.insertAdjacentHTML('beforebegins',`<label for = ${nextStep} className = 'steps'>
         Step ${nextStep}
       </label>
       <textarea id = ${nextStep}></textarea>`)
                            }
                          }
       >
          + Add
       </div>
       <button type = 'submit'> Post </button>
     </form>
    </div>
  );
}
