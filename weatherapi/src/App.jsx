import React, { useEffect, useState } from 'react'
import BarraPesquisa from './components/BarraPesquisa'
import CardCidade from './components/CardCidade'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Belem')

    useEffect(()=>{
        async function fetchWeather() {
            try{
                const apiKey = '311c61f2f4cb46c886f164507252106'
                const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`

                const response = await fetch(url)
                const data = await response.json()
                
                setWeather({
                    country: data.location.country,
                    city: data.location.name,
                    region: data.location.region,
                    date: data.location.localtime.substr(0,9),
                    localTime: data.location.localtime.substr(11),
                    condition: data.current.condition.text,
                    feelslike_c: data.current.feelslike_c,
                    isDay: data.current.is_day,
                    temp_c: data.current.temp_c,
                    icon: data.current.condition.icon
                })

            } catch(error){
                console.error('Erro ao buscar o clima:', error)
            }
        }

        fetchWeather()
    }, [city])
    
    const backgroundColor = weather?.isDay === 1 ? 'bg-slate-200' : 'bg-slate-950';

  return (
    <div className={`flex flex-col justify-center items-center ${backgroundColor} h-screen`}>
      <div className=' max-w-sm h-5/6 flex flex-col'>
        <BarraPesquisa isDay={weather?.isDay} onSearch={setCity}/>
        <CardCidade weather={weather} isDay={weather?.isDay}/>
      </div>
    </div>
  )
}

export default App