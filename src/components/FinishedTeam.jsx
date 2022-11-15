import React from 'react'
import Member from './Member'


function FinishedTeam(props) {
  console.log(props)
  return (
    <div className='FinishedTeam'>
        {/* FinishedTeamn: {props.team.length} */}
 {/* dette component viser det færdige team med flere detaljer  */}

 {/* for hvert objekt i det tilsendte array(props (som er arrayet team)) skal vi lave et memeber komponent som indeholder nedestående  */}

    {props.team.map((membernew)=>(<Member key={membernew.id} data={membernew} fullView={true} {...membernew} />))}
    </div>
    
  )
}

export default FinishedTeam