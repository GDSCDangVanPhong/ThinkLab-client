export const useUserColorMode = () => {
    const ColorMode = useColorMode()
    const toggleColorMode = (preference : string) => {
        if(preference == 'dark'){
            ColorMode.value = 'dark'
        }
        else if(preference == 'light'){
            ColorMode.value = 'light'
        }
        console.log(ColorMode.value)
    }
    return {
        ColorMode,
        toggleColorMode,
    }
}
