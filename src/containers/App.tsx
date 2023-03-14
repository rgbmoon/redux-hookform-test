import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { demoSlice } from '../store/slices/demoSlice'

function App() {
  const count = useAppSelector((state) => state.demo.value)

  const { increment, decrement } = demoSlice.actions

  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col w-screen h-screen p-4 [&>*]:mb-4">
      <div className="">{count}</div>
      <button className="py-1 px-2 bg-slate-400 text-white" onClick={() => dispatch(increment())}>
         Плюс сус
      </button>
      <button className="py-1 px-2 bg-slate-400 text-white" onClick={() => dispatch(decrement())}>
        Минус сус
      </button>
      <button className="py-1 px-2 bg-slate-400 text-white" onClick={() => dispatch(decrement())}>
        Минус сус
      </button>
    </div>
  )
}

export default App
