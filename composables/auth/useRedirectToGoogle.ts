export const redirect = () =>{
    const config = useRuntimeConfig()
    const params = new URLSearchParams({
        client_id: config.public.GOOGLE_CLIENT_ID || '',
        redirect_uri: 'http://localhost:3000/callback',
        response_type: 'code',
        scope: 'openid profile email',
        access_type: 'offline',
        prompt: 'consent'
    })
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}
