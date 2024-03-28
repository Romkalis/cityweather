import { Card } from './Card'
import s from './Days.module.scss';
import { Tabs } from './Tabs'

interface Props {
    
}
export interface Day  {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

export const Days = (props: Props) => {

    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 марта',
            icon_id: 'sunny',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Солнечно',
        },
        {
            day: 'Завтра',
            day_info: '29 марта',
            icon_id: 'rain',
            temp_day: '+11',
            temp_night: '+11',
            info: 'Облачно',
        },
        {
            day: 'Суббота',
            day_info: '30 марта',
            icon_id: 'sunnyrain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Солнечно',
        },
        {
            day: 'Воскресенье',
            day_info: '31 марта',
            icon_id: 'cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Солнечно',
        },
        {
            day: 'Понедельник',
            day_info: '1 апреля',
            icon_id: 'sunny',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Солнечно',
        },
        {
            day: 'Вторник',
            day_info: '2 апреля',
            icon_id: 'cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Солнечно',
        },
        {
            day: 'Среда',
            day_info: '3 апреля',
            icon_id: 'sunnyrain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Солнечно',
        },

]

    return (
        <>
            <Tabs />
            <ul className={s.days__list}>
                { days.map( (day) => 
                    <Card day={day} />
                )}
            </ul>
        </>
    )
}
