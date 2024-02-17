import { useState } from "react"
import "./App.css"

export default function App(){
  const [count,setCount] = useState(0)
  return (
    <>
      <div className="board">
        {count}
        <button onClick={() => setCount(count + 3)}>count</button>
      </div>
    </>
  );
}