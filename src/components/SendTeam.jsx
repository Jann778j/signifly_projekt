import {useState} from 'react'

function SendTeam(props) {
    const [sent, setSent] = useState(false)
    if(sent){
        return <p>Team sendt!</p>
    }
  return (
    <div className='SendTeam'>

         <button onClick={()=>props.setShowTeam(false)}>BACK</button>
         <br />
         <br />
         <br />
         <br />
         <form action="">
            <label htmlFor="form-email">Client E-mai:</label>
<input className='message' required type="email"  name="email" id="form-email" />
<br />
<br />
<br />
<label htmlFor="form-message">Message:</label>
<textarea className='message' name="message" id="message" cols="30" rows="4"></textarea>
<button onClick={()=>setSent(true)}>SEND TEAM</button>
</form>


    </div>

  )
}

export default SendTeam