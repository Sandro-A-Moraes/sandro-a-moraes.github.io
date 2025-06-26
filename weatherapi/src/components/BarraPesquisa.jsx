import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const BarraPesquisa = ({isDay, onSearch}) => {
  const [input, setInput] = useState('')

  const bgColor = isDay === 1 ? 'bg-slate-100' : 'bg-slate-600';
  const textColor = isDay === 1 ? 'text-black' : 'text-white';

  const handleClick = () => {
    if (input.trim() !== "") {
      onSearch(input)
      setInput("")
    }
  }

  return (
    <div className={`w-full h-1/6 p-6 ${bgColor} mx-auto rounded-lg flex flex-col justify-center items-center`}>
        <h1 className={`text-xl font-bold transition ease-in-out delay-150 ${textColor} hover:scale-110 hover:text-slate-800 duration-300`}>Digite o nome da cidade/País</h1>
        <div className='w-full flex justify-around items-center'>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='p-2 w-4/5 h-11 rounded-lg m-2 border-b-2 border-b-blue-600 focus:border-blue-500 focus:outline-none focus:border-2'/>
            <button onClick={handleClick} className='bg-blue-600 hover:bg-blue-800 transition ease-in-out p-3 rounded-full w-10 h-10'>
                <FaSearch/>
            </button>
        </div>
    </div>
  )
}

export default BarraPesquisa