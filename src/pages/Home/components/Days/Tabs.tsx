import s from './Days.module.scss'

interface Props {
    
}

export const Tabs = (props: Props) => {
const tabs = [
    {
        value: 'На неделю',
    },
    {
        value: 'На 10 дней',
    },
    {
        value: 'На месяц',
    }
]

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {
                    tabs.map( tab => (
                        <button className={s.tabs__button} key={tab.value}>{tab.value}</button>
                    ))
                }
            </div>
            <button className={s.cancel}>Отменить</button>
        </div>
    )
}
