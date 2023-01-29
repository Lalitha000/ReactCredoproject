import React, { useState } from 'react';
import './To.css';
//class component  example 
class EvenHandler extends React.Component {
state = {
 fruits : ["Apple","kiwi","Grapes","Orange"],
  };
 getvalue = (el) => {
   var filter = this.state.fruits.filter((item) => {return item != el})
       this.setState({
       fruits : filter,
       })
  }
render() {
  return (
    <ul className="list-group" id='ul'>
   {this.state.fruits.map((el,index)=>(
   <li key={index.toString()} className="list-group-item">{el}
   <button className='btn btn-danger m-3' onClick={()=> {this.getvalue(el)}}>Click</button>
   </li>
   ))}
   
   
  </ul>
  )
}
}
//function component example 

// function EvenHandler() {

//   const [name, setName] = useState({

//     fruits : ["Apple","Orange","pineapple","Goya"],
//   })

//   const getvalue = (el) =>{

//     var filter = name.fruits.filter((item)=>{ return item !== el})

//     setName({

//       fruits : filter
//     })

//   }
//   return (
//     <div>
//       <ul className="list-group" id='ul'>

//         {name.fruits.map((el,index)=>(
//         <li key={index.toString()} className="list-group-item">{el}
//        <button className='btn btn-danger m-3' onClick={()=> {getvalue(el)}}>Click</button>
//        </li>
//         ))}
//     </ul>
//     </div>
//   );
// }

export default EvenHandler

