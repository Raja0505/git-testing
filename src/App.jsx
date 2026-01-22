import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/Counter/counterSlice";

function App() {
 const { value} =  useSelector((s)=> s.value)
  const Dispatch = useDispatch();

  return (
    <>
    <h1>React Redux</h1>
    <h2>Count : {value}</h2>
    <button onClick={()=>  Dispatch(increment())}>+</button>
    <button onClick={()=> Dispatch(decrement())}>-</button>
    </>
  )
}

export default App
