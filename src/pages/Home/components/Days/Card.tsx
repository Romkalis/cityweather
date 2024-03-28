import s from './Days.module.scss'
import { Day } from './Days';
import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector';

interface Props {
    day: Day;
}

export const Card = (day: Props) => {
    return (
        <li className={s.days__item}>
            <h3 className={s.day__title}>{day.day.day}</h3>
            <p className={s.day__date}>{day.day.day_info}</p>
            <p className={s.day__icon}><GlobalSvgSelector id={day.day.icon_id} /></p>
            <p className={s.day__temp_day}>{day.day.temp_day}</p>
            <p className={s.day__temp_night}>{day.day.temp_day}</p>
            <p className={s.day__info}>{day.day.info}</p>
        </li>
    )
}


// day: 'Сегодня',
// day_info: '28 марта',
// icon_id: 'sunny',
// temp_day: '+18',
// temp_night: '+15',
// info: 'Солнечно',