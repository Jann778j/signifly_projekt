import { useState, useEffect } from "react"
import Header from "./components/Header"
import MemberList from "./components/MemberList"
import Team from "./components/Team"
import FinishedTeam from "./components/FinishedTeam"
import SendTeam from "./components/SendTeam"

function App() {

  // state is for modifying being possible?? 
const [members, setMembers] = useState([])
const [team, setTeam] = useState([])
const [showTeam, setShowTeam] = useState(false)

// sendes videre til productlist - som ikke bruger den, men som skal have den for at sende den videre - så members kan reagere på den
function addToTeam(data){
  // do we have the data?
  // cart skal finde en entry hvor id er lige med data.id 
if(team.find(entry=>entry.id === data.id)){
  // ellers skal jeg finde oldmember og retunere det nye membeer

  setTeam(oldTeam=>oldTeam.map(entry=>{
    if(entry.id!==data.id){
      return entry
    }
    //her gør jeg så man kan tilføje +1
    //laver en copi og modifyer den
    const copy ={...entry};
    copy.amount = copy.amount + 1;
    return copy;
  }))
} else {

    // concat = not modify
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
useEffect(()=>{
async function getData(){
  const res = await fetch("signiflyers.json");
  const data = await res.json();
  setMembers(data);
}
getData();
}, [])



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
