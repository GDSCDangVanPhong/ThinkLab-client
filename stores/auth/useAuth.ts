export const useAuth = defineStore('auth', () =>{
    const loading = ref<boolean>(false)
    const error = ref<boolean>(false)

    return {
        loading,
        error,
    }

})