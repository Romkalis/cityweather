import React from 'react'
import s from './Home.module.scss'
import { Header } from '../../shared/Header/Header'
import { ThisDay } from './ThisDay/ThisDay'
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo'

interface Props {
    
}

export const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <div className={s.main__top}>
                <ThisDay />
                <ThisDayInfo />
            </div>
            Home
        </div>
    )
}
