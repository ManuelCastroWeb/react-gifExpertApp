// import React, { useState, useEffect } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
// Import Components
 import GifGridItem from './GifGridItem'
// Import Custom Hooks
import useFetchGifs from '../hooks/useFetchGifs'



const GifGrid = ( { category } ) => {



    // Custom Hooks
    const { data : images, loading } = useFetchGifs( category )



    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>
            { loading && <p className='animate__animated animate__flash'> Loading </p> }
            <div className='card-grid'>
                { images.length > 0 && images.map( img => (
                    <GifGridItem
                        className='animate__animated animate__fadeIn'
                        { ...img  } // En este caso el Componente recibirá cada propiedad del Objeto 'img' independiente
                        // img={ img } // En este caso el Componente recibirá el Objeto 'img'
                        key={ img.id } />
                ) ) }
            </div>
        </>
    )
}



GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}



export default GifGrid