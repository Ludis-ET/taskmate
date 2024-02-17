import "./App.css"

export default function App(){
  let count = 0
  return(
    <>
      <div className="board">
        {count}
        <button onClick={() => console.log(count+=1)}>count</button>
      </div>
    </>
  )
}