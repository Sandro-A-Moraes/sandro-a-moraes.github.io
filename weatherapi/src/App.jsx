import React from 'react'
import BarraPesquisa from './components/BarraPesquisa'
import CardCidade from './components/CardCidade'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-blue-700 h-screen'>
      <div className=' max-w-sm h-5/6 flex flex-col'>
        <BarraPesquisa/>
        <CardCidade/>
      </div>
    </div>
  )
}

export default App