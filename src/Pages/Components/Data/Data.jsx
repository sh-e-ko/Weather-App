import React from 'react'
import style from './Data.module.css'
import img from '../../../assets/o.png'
import Load from '../Loading/Load'
export default function Data({ weather })
{
    return (

        <div className={style.container}>
            {weather ? (
                <div className={style.containt}>
                    <h1>{weather.name}</h1>
                    <img src={weather.icon} alt='photo' />
                    <h2>  {weather.humidity}% </h2> 
                    <h2> {weather.temp} &deg; </h2>
                    <div className={style.text}>
                        <h3>  {weather.tempmax}&deg;</h3>
                        <h3>   {weather.tempmin} &deg;</h3>
                    </div>
                    <h5> {weather.description} </h5>
                </div>
            )
                :
                (
                    <div className={style.load}>
                        <Load />
                        <p>...loading</p>
                    </div>

                )
            }

        </div >
    )
}
