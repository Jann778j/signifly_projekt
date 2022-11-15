import React from 'react'
import FinishedTeam from './FinishedTeam';


function Member(props) {
  

    // function der tildeler props
    function add(){
        props.addToTeam(props.data);
    }
  return (
       <article className='Member'>

    {/* henter data til hver member som så tildeles  */}

        <img src={props.data.img} alt="person" />
       <div className='memberflex'>
        <div>
             <h2>{props.data.name}</h2>
              <p className='para'>{props.data.stilling}</p>

    {/* hvis fullview er true så hvis de enheder der er wrapped i fullview.props */}
    {/* fullview er sat til false i MemberList og til true i FinishedTeam, derfor skal det aktivere før indholdet ses */}

                  {props.fullView === true && <p>E-mail: <a href={`mailto:${props.data.email}`}>{props.data.email}</a></p>} 
                     {props.fullView === true && <p> Tlf: <a href={`tel:${props.data.phone}`}>{props.data.phone}</a></p>} 
                   {props.fullView === true && <p>{props.data.beskrivelse}</p>} 
         </div>


         {/* lokal function fra toppen som tildeler props onClick={add} - og giver mulighed for at add til team */}
              {props.fullView === false && <button onClick={add}>ADD TO TEAM</button>}
        </div>
      

    </article>
  )
}

export default Member