"use client"
import React from 'react'
import { useTheme } from "next-themes";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness5Icon from '@mui/icons-material/Brightness5';


const ToggleBtn = () => {
    const { systemTheme, theme, setTheme } = useTheme({ value: 'dark' });
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <a
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='pb-2'>
            {currentTheme === 'light' ? <Brightness7Icon /> :<Brightness5Icon />  }
        </a>
    )
}

export default ToggleBtn