/* CUSTOM HOOKS */

// Es una forma de extraer lógica de un componente para poder reutilizarla de manera simple en otro lado.
// Por lo general los Hooks comienzan con 'use'

// Import Hooks
import { useState, useEffect } from 'react'
// Import Helpers
import { getGifs } from '../helpers/getGifs'



const useFetchGifs = ( category ) => {



    // State
    const [state, setState] = useState({
        data: [],
        loading: true
    })



    // Effect
    useEffect( () => {
        getGifs( category )
            .then( data => setState({
                data,
                loading: false
            }) )
    }, [category] )

    // Otra forma no recomendada Async/Await
    // useEffect( async () => {
    //     const searchedGifs = await getGifs( category )
    //     searchedGifs && setState( {
    //         data: searchedGifs,
    //         loading: false
    //     } )
    // }, [category] )



    return state

}



export default useFetchGifs