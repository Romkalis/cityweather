import { Theme } from "../context/ThemeContext"

export const changeCssRootVariables = (theme: Theme) => {
    const root = document.querySelector(':root') as HTMLElement

    const componentsStyles = [
        '--body-background-', 
        '--components-background-', 
        '--card-background-', 
        '--text-color-', 
        '--box-shadow-']

    componentsStyles.forEach( (component => {
      root.style.setProperty(
      `${component}default`,  // первый парметр - что меняем
        `var(${component}${theme})` // второй - НА что меняем значение
        )
    }))
}