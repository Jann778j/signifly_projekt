import React from 'react'

function Team(props) {
  return (
  <section className="Valgtteam">

    {/* modtager en member af gangen  */}
    {/* modtager remove from team function som gør det muligt at fjeren member fra team */}
    <ul>
        {props.team.map(item=> <li key={item.id}><button className='x' onClick={()=>props.removeFromTeam(item.id)}>x</button> {item.name} </li>)}
       
       
    </ul>
    <button onClick={()=>props.setShowTeam(true)}>SHOW TEAM</button>
    
  </section>
  )
}

export default Team