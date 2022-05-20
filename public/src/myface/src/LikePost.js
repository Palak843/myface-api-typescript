import React , {useState , useEffect} from 'react';
function LikePost(){ 
    const [ClickedCount , setClickedCount] = useState(0);
    function incrementCount(){
    setClickedCount(ClickedCount + 1);
    }
    return <div>
        <p> {ClickedCount}</p>
        <button onClick ={incrementCount}>Like</button>
    </div>
}
export default LikePost;