import React from 'react'



const GifGridItem = ( { title, url } ) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <p> { title } </p>
            <img src={ url } alt="" />
        </div>
    )
}

// Otra manera de destructuring
// const GifGridItem = ( { img: { title, url } } ) => {
//     return (
//         <div>
//             { title }
//             <img src={ url } alt="" />
//         </div>
//     )
// }



export default GifGridItem