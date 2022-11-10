import { useState, useEffect } from "react"
import Header from "./components/Header"
import MemberList from "./components/MemberList"
import Team from "./components/Team"
import FinishedTeam from "./components/FinishedTeam"
function App() {
const [members, setMembers] = useState([])
const [team, setTeam] = useState([])
const [showTeam, setShowTeam] = useState(false)

function addToTeam(data){
if(team.find(entry=>entry.id === data.id)){
  setTeam(oldTeam=>oldTeam.map(entry=>{
    if(entry.id!==data.id){
      return entry
    }
    const copy ={...entry};
    copy.amount = copy.amount + 1;
    return copy;
  }))
} else {
  setTeam(oldTeam=>oldTeam.concat({...data, amount:1}))
}
}
function removeFromTeam(id){
//find and modify a member
setTeam(oldTeam=>{
  const subtracted = oldTeam.map(item=>{
    if(item.id===id){
      return{...item, amount:item.amount-1}
    }
    return item
  })
const filtered = subtracted.filter(item=>item.amount>0)
return filtered
})

}


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
    {showTeam ? <FinishedTeam team={team}/> : (
    <><MemberList members={members} addToTeam={addToTeam} ></MemberList>
    <Team removeFromTeam={removeFromTeam} members={members} team={team} setShowTeam={setShowTeam}></Team></>)}
    
    
    </div>
  )
}

export default App
