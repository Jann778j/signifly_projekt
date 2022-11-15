import { useState, useEffect } from "react"
import Header from "./components/Header"
import MemberList from "./components/MemberList"
import Team from "./components/Team"
import FinishedTeam from "./components/FinishedTeam"
import SendTeam from "./components/SendTeam"

function App() {

  // state bruger man når man skal give en værdi til er fx. et array eller en sætte en state til false/true 
const [members, setMembers] = useState([])
const [team, setTeam] = useState([])
const [showTeam, setShowTeam] = useState(false)

// sendes videre til memberlist - som ikke bruger den, men som skal have den for at sende den videre - så members kan reagere på den
 
// i denne functio bruger jeg setteam og team fordi jeg gerne vil tilføje medlemmer fra en liste til en anden 
function addToTeam(data){
  // do we have the data?
  // cart skal finde en teamMember hvor id er lige med data.id 
  // teammember = variabel - så hvis variablens id er det samme som datas ide - så skal der ske noget 
  // => gør at jeg ikke modifyer state directly - det må man nemlig ikke
if(team.find(teamMember=>teamMember.id === data.id)){ 
  // ellers skal jeg finde oldmember og retunere det nye membeer

  //map - finder fx. hvert memeber i arrayet som er oldteam
  //map er måske reachts foreach???
  setTeam(oldTeam=>oldTeam.map(teamMember=>{
    if(teamMember.id!==data.id){
      return teamMember
    }
    //her gør jeg så man kan tilføje +1
    //laver en copi og modifyer den
    // ... = modtager alle properties som objektet indeholder 
    const copy ={...teamMember};
    copy.amount = copy.amount + 1;
    return copy;
  }))
} else {

    // concat = not modify
    //team - eller setteam skal indeholde alt hvad oldteam har og noget mere (data og amount) 
  setTeam(oldTeam=>oldTeam.concat({...data, amount:1}))
}
}

// denne function sendes til Team hvor den bliver brugt på button
function removeFromTeam(id){
//find and modify a member
// trækker det rette memeber man har avlgt fra 

setTeam(oldTeam=>{
  const subtracted = oldTeam.map(item=>{
    if(item.id===id){

      // rrturner et nyt objekt hvor amount er en mindre
      return{...item, amount:item.amount-1}
    }
    // else return item
    return item
  })

const filtered = subtracted.filter(item=>item.amount>0)
return filtered
})

}

// her henter og fetcher jeg data i form af min json fil 
// jeg sender data herfra ind i member og videre ned til de lister der har brug for at vide noget om det ved at sige member={member}
// sender data til memberlist og member og team


// useEffect er en function der bruges i sammnespil med usestate - den er fx med til at vi kun henter data en gang - eller når dependencies ændres
useEffect(()=>{
async function getData(){
  const res = await fetch("signiflyers.json");
  const data = await res.json();
  setMembers(data);
}
getData();
}, [])

// det tommme array gør at vi kun henter dataen en gang



  return (
    <div className="App">
  
    
    <Header></Header>

    {/* hvis showTeam er aktiv så vis finishedTeam og sendteam ellers vis alt det andet */}

    { showTeam ? <FinishedTeam team={team}/> : <MemberList members={members} addToTeam={addToTeam} ></MemberList>}
    {showTeam ? <SendTeam  setShowTeam={setShowTeam}/> : <Team removeFromTeam={removeFromTeam} members={members} team={team} setShowTeam={setShowTeam}></Team> }

    </div>
  )
}

export default App
