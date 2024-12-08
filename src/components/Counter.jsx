import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slices/Counterslice'


const Counter = () => {

   const dispatch = useDispatch();
   const value = useSelector((state)=>state.counter.value);

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className=' flex gap-5 w-[20%]  rounded-md bg-white justify-center items-center'>
        <button onClick={()=>dispatch(increment())} className='text-[3rem] border-r-2 '>-</button>
        <div>{value}</div>
        <button onClick={()=>dispatch(decrement())} className='text-[3rem] border-l-2 '>+</button>
        </div>
    </div>
  )
}

export default Counter

