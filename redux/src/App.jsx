import { useState } from 'react'

import './App.css'
import { incCount, decCount, resetCount } from './redux/action'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  
  const count = useSelector((state) => state.count)

  const dispatch = useDispatch()


  return (
    <>
      <button onClick={() =>dispatch( incCount())}>+</button>
      <h1>{count}</h1>
      <button onClick={() =>dispatch (decCount())}>-</button>
      <br />
      <br />

      <button onClick={() =>dispatch (resetCount())}>Reset</button>
    </>
  )
}

export default App
