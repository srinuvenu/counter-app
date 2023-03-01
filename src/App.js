import React,{useState}  from  'react' ;
import "./App.css";
function App(){
  let [count, UpdateCount]=useState(0);
  
  return(
    <div>
       <h1> counter :{count}</h1> 
       <button onClick={()=>{UpdateCount(count++)}}>incre</button>
       <button onClick={()=>{UpdateCount(count--)}}>decre</button>
       
    </div>
  );
}
export default App;
