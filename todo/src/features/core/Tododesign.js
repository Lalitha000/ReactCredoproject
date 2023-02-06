import React from 'react';
import Addtodo from './Addtodo';


function Tododesign(props) {

const {record,updateFav,updateChecked} = props;
   

  return (
    <div >
   <h4 className='text-center mt-3'>Task List</h4>
                <ul className="list-group mt-5">
                    {record.map((ite, index) => (
    
                        <li className="list-group-item mt-3 d-flex justify-content-between" key={index.toString()} >
                            <input onClick={()=>updateChecked(ite)} className="form-check-input me-1" type="checkbox" defaultChecked={ite.checked} id={ite.label} />
                            <label   className={ite.checked ? "text-decoration-line-through form-check-label stretched-link":"form-check-label stretched-link"} >{ite.label}</label>
                            <span onClick={()=>updateFav(ite)} className='material-icons'>{ite.fav ? "star":"star_border"}</span>
                           
                        </li>
    
                    ))}
    
    
                </ul>
</div>
  )
}



export default Tododesign
