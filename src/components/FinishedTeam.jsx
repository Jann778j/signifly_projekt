import React from 'react'
import Member from './Member'


function FinishedTeam(props) {
  return (
    <div className='FinishedTeam'>
        {/* FinishedTeamn: {props.team.length} */}
    
    {props.team.map((membernew)=>(<Member key={membernew.id} data={membernew} fullView={true} {...membernew} />))}
    </div>
    
  )
}

export default FinishedTeam