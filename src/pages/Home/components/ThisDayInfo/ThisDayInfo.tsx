 import s from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from './ThisDayItem/TgisDayItem'


interface Props {
    
}

export interface Item {
        icon_id: string;
        title: string;
        description: string;
}

const items = [
    {
        icon_id: 'temperature',
        title: 'Температура',
        description: '20° - ощущается как 17°',
    },
    {
        icon_id: 'pressure',

        title: 'Давление',
        description: '765 мм ртутного столба - нормальное',
    },
    {
        icon_id: 'humidity',
        title: 'Осадки',
        description: 'Без осадков',
    },
    {
        icon_id: 'wind',
        title: 'Ветер',
        description: '3 м/с юго-запад - легкий ветер',
    },
]

export const ThisDayInfo = (props: Props) => {
    return (
        <section className={s.this__day_info}>
            <ul className={s.this__day_info_items}>
                {
                    items.map( (item: Item) => {
                        return (
                            <ThisDayItem item={item} />
                        )
                    })
                }
            </ul>
            <img src={cloud} alt="" className={s.background} />
        </section>
    )
}
