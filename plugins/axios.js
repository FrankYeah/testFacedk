export default function( { $axios, redirect} ){
    $axios.onRequest((config) => {
        console.log('config')
        console.log(config)
        console.log(document.cookie)
        return config
    })
} 