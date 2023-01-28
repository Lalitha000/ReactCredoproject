import React from 'react';
import './To.css';
function To(props) {
    console.log(props);

    const { collection } = props;
    return (

        <div>
            {/* <li>{collection.image}</li>
        <li>{collection.title}</li>
        <li>{Object.keys(collection).image}</li> */}

            {/* doubt about map(() => {} should return only return word ) // map(() => () return without return keyword ) */}

{/* state is async doesn't changes value immediately */}
                 <ul class="list-group" id='ul'>

                {collection.map((item, i) => {

                   return <li key={i} class="list-group-item"> <img id='img' src={item.image} alt={item.image} />{item.title}</li>

})}


            </ul>
        </div>

    )

}

export default To;