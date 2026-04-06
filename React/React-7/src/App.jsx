
import './App.css'


function App() {

function clicked(){
  alert('clicked bro')
}
function  para(){
  alert('clicked para bro')
}

function change(e){
  console.log('clicked inp bro',e.target.value)
}
function handlesubmit(){
  alert('submit krdu kya')
}

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={change}/>
        <button type='submit'>Submit</button>
      </form>
    <p onMouseOver={para} style={{border:"2px solid black"}} > let it be para</p>
<button onClick={clicked}>click me</button>
</div>
  )
}

export default App
