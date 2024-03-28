import React from 'react'
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector'

interface Props {
    
}

export const ThisDay = (props: Props) => {
    return (
        <header className={s.this__day}>

            <div className={s.top__block}>
                <div className={s.main__info}>
                    <p className={s.degrees}> 20°</p>
                    <p className={s.today}>Cегодня</p>
                </div>
                <div className={s.weather__logo}> 
                    <GlobalSvgSelector id="sun__logo" /> 
                </div>
            </div>

            <div className={s.bottom__block}>
                <p className={s.bottom__text}>Время: время сейчас</p>
                <p className={s.bottom__text}>Город: Какой-то город</p>
            </div>
        </header>
    )
}
