import { ReactNode, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"


interface Props {
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}:Props) => {
    const [theme, setTheme] = useState<string>('light')
    //d value провайдеры мы должны передавать тему и функцию меняющую тему

    const changeTheme = (theme: string) => {
        return setTheme(theme)
    }

    return <ThemeContext.Provider 
                value={{
                    theme,
                    changeTheme
                }} 
                {...props}>{children}</ThemeContext.Provider>
}




// import { ReactNode, useState } from "react"
// import { ThemeContext } from "../context/ThemeContext"

// interface Props {
//     children: ReactNode
// }

// export const ThemeProvider = ({children, ...props}:Props) => {
//     const [theme, setTheme] = useState('light')

//     const changeTheme = (theme: string) => {
//         setTheme(theme)
//     }

//     return <ThemeContext.Provider value={{
//             theme: theme,
//             changeTheme,
//     }} {...props} >
//             {children}</ThemeContext.Provider>
// }