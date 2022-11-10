
import Member from './Member'

function MemberList(props) {
  return (
<main className="Members">
{props.members.map((product)=>(<Member key={product.id} data={product} {...product} addToTeam={props.addToTeam}/>))}
</main>
  )
}

export default MemberList