
import Member from './Member'

function MemberList(props) {
  return (
   <> 
   <section>

    <main className="Members">


    {/* denne viser alle medlemmer af signifly teamet - som så kan tilføjes til deet ønskede team */}
    {/* her tilføver jeg alt det data den skal bruge for at vise members  */}
    {/* map = ?? */}
    {/* ... = send data here - pass everything here - modtager alle enheder i objektet i arrayet */}
    {/* modtager dette - addToTeam={props.addToTeam} - og sender function videre til hvert memeber */}

   

{props.members.map((membernew)=>(<Member key={membernew.id} data={membernew} {...membernew} fullView={false} addToTeam={props.addToTeam}/>))}
</main>
  

 </section>
</>
  )
}

export default MemberList