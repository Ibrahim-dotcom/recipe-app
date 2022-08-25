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
     </form>
    </div>
  );
}
