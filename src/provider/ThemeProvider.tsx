import { ReactNode, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { changeCssRootVariables } from "../model/changeCssRootVariables"
import { Theme } from "../context/ThemeContext"


interface Props {
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}:Props) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
    //d value провайдеры мы должны передавать тему и функцию меняющую тему

    const changeTheme = (theme: Theme) => {
        changeCssRootVariables(theme)
        return setTheme(theme)
    }

    return <ThemeContext.Provider 
        value={{
            theme,
            changeTheme
        }} 
        {...props}>{children}</ThemeContext.Provider>
}
