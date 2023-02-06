import React, { useState } from 'react';
import './homepage.css';
import $ from "jquery";
import Tododesign from '../features/core/Tododesign';
import AddTodo from '../features/core/Addtodo';

function Homepage() {

    const [items, setItems] = useState([

        {label : "TODO One" , fav : false , checked : false},
        {label : "TODO Two" , fav : true , checked : true},
        {label : "TODO Three" , fav : false , checked : false},

    ]);

    const UpdateTodo = () => {

      setItems([...items,{label:"Todo Four",fav:false,checked:true}])

    }

    const updateFav = (arg) => {

        const collect = items.map((el) => {
            if (el.label === arg.label) {
                return { ...arg, fav: !arg.fav }
            }
            else { return el; }
        });
        setItems(collect);


    }

    const updateChecked = (arg)=>   {
    

        const col = items.map((el)=>{

           
           if(el.label === arg.label){ return {...arg,checked : !arg.checked}}
          else{ return el; }
  
            });
           
            setItems(col);
          
    }



    return (

        
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3 vh-100 col-lg-3 bg-secondary bg-opacity-75'>
             <AddTodo updateTodo={UpdateTodo}/>
            </div>
            <div className='col-md-9  vh-100 col-lg-9 bg-info bg-opacity-75'>
                <Tododesign  updateChecked ={updateChecked} updateFav={updateFav} record={items}/>
            </div>
        </div>
    
    
    </div>

    )
}



export default Homepage
