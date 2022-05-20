
import React , {useState , useEffect} from 'react';
function DislikePost(){ 
    const [ClickedCount , setClickedCount] = useState(0);
    function incrementCount(){
    setClickedCount(ClickedCount + 1);
    }
    return <div>
        <p>{ClickedCount}</p>
        <button onClick ={incrementCount}>Dislike</button>
    </div>
}
export default DislikePost;