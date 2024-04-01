import { useEffect, useState } from "react"
import s from "./Header.module.scss"
import { GlobalSvgSelector } from "../../../assets/images/icons/global/GlobalSvgSelector"
import Select from 'react-select'
import { log } from "console";
import { compileFunction } from "vm";

interface Props {}




export const Header = (props: Props) => {

  const [theme, setTheme] = useState('light');

  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Екатеринбург' }
  ]
  const colorStyles = {
    control: (styles: any) => ({
      ...styles, 
      backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 148, 255, 0.20)', 
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
      color:  theme === 'dark'  ? '#fff': '#000',
      zIndex: '100'
    })
  }



  const changeTheme = () => { 
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
 //используем useEffect, чтобы не зависеть от асинхронного useState
  useEffect(() => {
    
    const root = document.querySelector(':root') as HTMLElement

    const componentsStyles = ['--body-background-', '--components-background-', '--card-background-', '--text-color-', '--box-shadow-']

    componentsStyles.forEach( (component => {
      root.style.setProperty(
      `${component}default`,  // первый парметр - что меняем
        `var(${component}${theme})` // второй - НА что меняем значение
        )
    }))

  }, [theme])
 

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
