import React , {useState , useEffect} from 'react'
import { getParsedCommandLineOfConfigFile } from 'typescript';
function CreateUser(){
    const[name, setName] = useState("");
    const[username, setUsername]=useState("");
    const[email, setEmail]=useState("");
    const[imageUrl, setImageUrl]=useState("");
    const[coverimage, setCoverImageUrl]=useState("");

    function submitForm(e){
      var nameRegex = /^[a-zA-Z ]+$/;          //Only characters A-Z, a-z are  acceptable.
      var usernameRegex = /^[a-z0-9_.]+$/;     // Lowercase Letters (a-z),Numbers (0-9),Dots (.),Underscores (_)
      var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
      var validname = name.match(nameRegex);
      var validusername = username.match(usernameRegex);
      var validemail = email.match(emailRegex);
      alert (validemail);
      if(validname == null || validusername == null || validemail == null){
          alert("Your details are not valid" + validname + '-' + validusername + '-' + validemail);
          return false;
      }
      e.preventDefault();
      fetch("http://localhost:3001/users/create",{
       method:"post",
       headers: {
         'Content-Type':"application/json"
       },
      body: JSON.stringify({
        name : name,
        username : username,
        email : email,
        imageUrl : "https://i.pinimg.com/736x/47/2b/61/472b61d49bb2c847bb7e0665497af47e.jpg",
        CoverImage :"https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0" ,
    }),
    });
    console.log("submitted");
  }
    return (
    <form onSubmit={submitForm}>
       <label>
        Name:
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
       </label>
       <label>
        Username:
        <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}/>
    </label>
    <label>
        Email:
        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
    </label>
    <label>
        ProfileImageUrl:
        <input type="text" name="profileImageUrl"onChange={(e)=>setImageUrl(e.target.value)}/>
      </label>
      <label>
        CoverImageUrl:
        <input type="text" name="coverImageUrl"onChange={(e)=>setCoverImageUrl(e.target.value)}/>
      </label>
    <button type="submit">Submit</button>
    </form>
    );
}
export default CreateUser;