import {defineStore} from "pinia";

export const useTheme = defineStore('colorMode',() =>{
    const colorMode = useColorMode()
    localStorage.setItem('nuxt-color-mode', 'light')
    const toggleTheme = (state : 'light' | 'dark' |'system') =>{
        colorMode.value = state
    }

    return{
        colorMode,
        toggleTheme,
    }

})