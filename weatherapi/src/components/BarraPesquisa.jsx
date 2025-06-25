import React from 'react'
import { FaSearch } from "react-icons/fa";

const BarraPesquisa = () => {
  return (
    <div className='w-full h-1/6 p-6 bg-slate-100 mx-auto rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-xl font-bold transition ease-in-out delay-150 text-blue-700 hover:scale-110 hover:text-indigo-800 duration-300'>Digite o nome da cidade</h1>
        <div className='w-full flex justify-around items-center'>
            <input type="text" className='p-2 w-4/5 h-11 rounded-lg m-2 border-b-2 border-b-blue-600 focus:border-blue-500 focus:outline-none focus:border-2'/>
            <button className='bg-blue-600 hover:bg-blue-800 transition ease-in-out p-3 rounded-full w-10 h-10'>
                <FaSearch/>
            </button>
        </div>
    </div>
  )
}

export default BarraPesquisa