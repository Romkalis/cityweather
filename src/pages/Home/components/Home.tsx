import s from './Home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo'
import { Days } from './Days/Days'

interface Props {
    
}

export const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <div className={s.main__top}>
                <ThisDay />
                <ThisDayInfo />
            </div>
            <Days />
            Home
        </div>
    )
}
