import React from 'react'

const FormTarefa = () => {
  return (
    <div className='w-3/5 flex justify-center '>
        <input type="text" placeholder='Digite sua tarefa aqui' className=' p-2 w-2/4 border-2 border-b-green-500 rounded-l-lg focus:outline-none focus:border-green-500'/>
        <button className='bg-green-400 px-4 rounded-r-lg'>Adicionar</button>
        
    </div>
  )
}

export default FormTarefa