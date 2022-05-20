import './App.scss';
import React , {useState , useEffect} from 'react';

function UserDetail() {
    const [users , setUsers] = useState(null);
    useEffect(()=>{
      fetch("http://localhost:3001/users").then(response => response.json()).then(data => setUsers(data.results));
    }, [])
    if(!users) {
      return <div>Waiting for userdata!</div>
    }
    return (
      <div className="container">
        {users.map(user => <div className ="user-name"> 
          {user.name} <br/>
          {user.email}
          {<img className="user-image"src={user.profileImageUrl}/> }
        </div>)}
      </div>
    );
  }
  
  export default UserDetail;