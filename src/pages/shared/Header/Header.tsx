import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../../assets/images/icons/global/GlobalSvgSelector";
import Select from 'react-select'

interface Props {}


const options = [
  { value: 'city-1', label: 'Санкт-Петербург' },
  { value: 'city-2', label: 'Москва' },
  { value: 'city-3', label: 'Екатеринбург' }
]

const colorStyles = {
  control: (styles: any) => ({...styles, 
    backgroundColor: 'rgba(71, 148, 255, 0.20)', 
    borderRadius: '10px',
    fontSize: '16px',
    width: '194px',
    textAlign: 'center',
    color: '#000',
    border: 'none',
    zIndex: '100'
  })
}

export const Header = (props: Props) => {
  return (
    <section className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>City Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change_theme" />
        </div>
        <Select 
          className={s.select} 
          options={options} 
          styles={colorStyles}
          defaultValue={options[2]}
          />
      </div>
    </section>
  );
};
