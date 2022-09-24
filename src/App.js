import './App.css';
import "./index.css";
import React, {useState} from 'react';
const generateUsers = () =>{
  return ["user1","user2","user3","user4","user5","user6","user7","user8","user9","user10", ]
};
const reload = () =>{
  return window.location.reload()
}



function App() {
  const[mount,setMount] = useState(generateUsers());
 
  const[x,setX] = useState(mount.length)
const removeRandom = () =>{
  while(mount.length){
    const random = Math.floor(Math.random() * mount.length);
    const el = mount.splice(random, 1)[1];
    return el;
  }
};
const setRandom = () =>{
  return setMount(mount.filter(n=> !removeRandom().includes(n)))
}

 const random = () =>{

    return setX(x - 1), setRandom()
}
  
 const setNum = () =>{
  if(mount.length >1){
    return "there are left" + " " + x + " " + "users"
  }else if(mount.length === 1){
    return  "there is left" + " " + x + " " + "user"
  } else if(mount.length==0){
    return "There are"+" "+ x + " " + "users left "
  }
  };
 
  return (
    <div className="App">
        <h1>{setNum()}</h1>
        <h2>{mount}</h2>
        <button className='button'  onClick={random}>click me</button>
        <button className='button' onClick={reload}>refresh</button>
    </div>
  );
}

export default App;
