import React from 'react'
import FinishedTeam from './FinishedTeam';

function Member(props) {
    function add(){
        props.addToTeam(props.data);
    }
  return (
       <article className='Member'>
        {/* {props.fullView === true &&  <img src={props.data.imgfull} alt="person" />} */}
        {/* {props.fullView === false &&  <img src={props.data.img} alt="person" />} */}
        <img src={props.data.img} alt="person" />
       <div>
        <h2>{props.data.name}</h2>
            <h3>{props.data.stilling}</h3>
       {props.fullView === true && <h4><a href={`mailto:${props.data.email}`}>{props.data.email}</a></h4>} 
    {props.fullView === true && <p><a href={`tel:${props.data.phone}`}>{props.data.phone}</a></p>} 
         {props.fullView === true && <p>{props.data.beskrivelse}</p>} 
        {props.fullView === false && <button onClick={add}>ADD TO TEAM</button>}
        </div>
      

    </article>
  )
}

export default Member