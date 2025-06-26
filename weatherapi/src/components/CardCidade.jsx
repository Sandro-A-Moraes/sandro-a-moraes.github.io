import React from 'react'

const CardCidade = ({weather}) => {
    const backgroundColor = weather?.isDay === 1 ? 'bg-slate-100' : 'bg-slate-600'
    const backgroundColor2 = weather?.isDay === 1 ? 'bg-slate-400' : 'bg-slate-600'
    const textColor = weather?.isDay === 1 ? 'text-black' : 'text-white'

  return (
   <div className={`w-full mt-3 ${backgroundColor} rounded-lg flex p-4 flex-col justify-center items-center ${textColor}`}>
      <h1 className='text-xl font-bold mb-4'>Clima atual</h1>
      {weather ? (
        <div className={`${backgroundColor2} p-6 rounded-lg flex flex-col gap-8 ${textColor}`}>
          <div>
            <h3 className='text-2xl text-center font-semibold'>{weather.city}, {weather.country}</h3>
            <img src={weather.icon} alt={weather.condition} className='mx-auto my-2 w-20' />
          </div>
          <div className=' grid grid-cols-3 gap-9 text-center'>
            <div className='flex justify-center text-lg text-center w-full p-6'>Temperatura: {weather.temp_c}°C</div>
            <div className='flex justify-center w-full p-6 text-lg'>Sensação: {weather.feelslike_c}°C</div>
            <div className='flex justify-center w-full p-6 text-md italic'>{weather.condition}</div>
          </div>
        </div>
      ) : (
        <p className='text-gray-500'>Carregando...</p>
      )}
    </div>
  )
}

export default CardCidade