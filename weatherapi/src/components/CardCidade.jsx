import React from 'react'
import { useEffect, useState } from 'react'

const CardCidade = () => {
    const [weather, setWeather] = useState(null)

    useEffect(()=>{
        async function fetchWeather() {
            try{
                const apiKey = '311c61f2f4cb46c886f164507252106'
                const cidade = 'Belem'
                const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`

                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
            } catch(error){
                console.error('Erro ao buscar o clima:', error)
            }
        }

        fetchWeather()
    }, [])
    

  return (
    <div className='w-full h-5/6 bg-slate-100 mt-3 rounded-lg flex flex-col justify-center items-center'>

    </div>
  )
}

export default CardCidade