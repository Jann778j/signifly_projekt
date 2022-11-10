import React from 'react'

function Team(props) {
  return (
  <section className="Valgtteam">
    <ul>
        {props.team.map(item=> <li key={item.id}>{item.productdisplayname} <button className='x' onClick={()=>props.removeFromTeam(item.id)}>x</button></li>)}
       
       
    </ul>
    <button onClick={()=>props.setShowTeam(true)}>SE TEAM</button>
  </section>
  )
}

export default Team