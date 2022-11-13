import React from 'react'

function SendTeam(props) {
  return (
    <div className='SendTeam'>
<p>Client E-mai:</p>
<input className='message' type="email" required />
<br />
<br />
<br />
<p>Message:</p>
<textarea className='message' name="message" id="message" cols="30" rows="4"></textarea>
<button >SEND TEAM</button>

 <button onClick={()=>props.setShowTeam(false)}>BACK</button>
    </div>

  )
}

export default SendTeam