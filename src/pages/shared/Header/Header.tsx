import { useEffect, useState } from "react"
import s from "./Header.module.scss"
import { GlobalSvgSelector } from "../../../assets/images/icons/global/GlobalSvgSelector"
import Select from 'react-select'
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../context/ThemeContext";

interface Props {}

export const Header = (props: Props) => {

  const theme = useTheme()

  // const [theme, setTheme] = useState('light');

  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Екатеринбург' }
  ]
  const colorStyles = {
    control: (styles: any) => ({
      ...styles, 
      backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 148, 255, 0.20)', 
      borderRadius: '10px',
      fontSize: '16px',
      width: '194px',
      textAlign: 'center',
      color: '#000',
      border: 'none',
      zIndex: '100'
    }),
    singleValue: (styles: any) => ({
      ...styles, 
      color:  theme.theme === Theme.DARK   ? '#fff': '#000',
      zIndex: '100'
    })
  }



  const changeTheme = () => { 
    // setTheme(theme === 'light' ? 'dark' : 'light')
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)

  }

 

  return (
    <section className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>City Weather</div>
      </div>
      <div className={s.wrapper}>
        <div  
          className={s.change_theme}
          onClick={changeTheme}
        >
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
