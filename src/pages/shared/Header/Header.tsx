import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../../assets/images/icons/global/GlobalSvgSelector";
import Select from 'react-select'

interface Props {}


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>CityWeather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change_theme" />
        </div>
        <Select className={s.select} options={options} />
      </div>
    </header>
  );
};
