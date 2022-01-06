/* Get Gifs Helper */


// Temp
// const getGifs = () => {
//     const url = `https://api.giphy.com/v1/gifs/search?q=bear&limit=10&api_key=JmKHGS23Udeq6eAG52KxYRxM7KCUtTeU`
//     fetch( url )
//         .then( response => response.json() )
//         .then( data => console.log( data ) )
//         .catch( console.error )
// }

export const getGifs = async category => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=JmKHGS23Udeq6eAG52KxYRxM7KCUtTeU` // encodeURI(), sirve para codificar un String al formato de una URL, reemplazando caracteres y espacios por caracteres usados en las URLs
    const response = await fetch( url )
    const { data } = await response.json()
    
    const gifs = data.map( image => ({
        id: image.id,
        title: image.title,
        url: image.images?.downsized_medium.url 
    }) )
 
    // Como estamos usando Async/Await retorna una Promise, dependiendo de si obtiene la data retronará los gifs o no
    return gifs
}