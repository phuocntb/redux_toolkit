import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { countAction } from './store/reducers/countReducer';
import { countAction } from './store/slices/count.slice';
export default function App() {
  const dispatch = useDispatch();
  const {countStore} = useSelector(store => store)
  return (
    <div>
      App
      <h1>Count Store Test {countStore}</h1>
      <button onClick={() => {
        // dispatch({type: 'count/increment'})
        dispatch(countAction.increment())
      }}>Tang</button>


      <button onClick={() => {
        // dispatch({type: 'count/increment'})
        dispatch(countAction.reset(1000))
      }}>set 1000</button>
    </div>
  )
}
