import React from 'react'

function Member(props) {
    function add(){
        props.addToTeam(props.data);
    }
  return (
       <article className='Member'>
        <img src="Born-Digital.png" alt="person" />
        <h2>{props.data.name}</h2>
        <h3>{props.data.email}</h3>
        <p>{props.data.stilling}</p>
        <button onClick={add}>ADD TO TEAM</button>

    </article>
  )
}

export default Member