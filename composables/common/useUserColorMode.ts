export const useUserColorMode = () => {
    const ColorMode = useColorMode()

    console.log(ColorMode.value)
    const toggleColorMode = (preference : string) => {
        if(preference == 'dark'){
            ColorMode.value = 'dark'
        }
        else if(preference == 'light'){
            ColorMode.value = 'light'
        }

    }
    return {
        ColorMode,
        toggleColorMode,
    }
}
