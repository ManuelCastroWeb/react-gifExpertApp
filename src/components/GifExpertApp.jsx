import React, { useState } from 'react'
// Import Components
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'



function GifExpertApp() {



    // State
    const [ categories, setCategories ] = useState([ 'One punch' ])



    return (
        <>
            <h2> GifExpertApp </h2>
            {/* AddCategory en este caso recibe el State desde el padre para poder moficar la data de este */}
            <AddCategory
                setCategories={ setCategories } />
            <hr />

            <div>
                { /* Las expresiones entre llaves deben devolver algún tipo de valor para que React pueda pintarlos */ }
                {/* El 'Key' Prop sirve para que React sepa cual elemento se está iterando y lo identifiqye para trabajar con el correctamente por debajo */}
                {/* { categories.map( category => <li key={ category }> { category } </li> ) } */}
                { categories.map( category => <GifGrid key={ category } category={ category } /> ) }
            </div>
        </>
    )
}



export default GifExpertApp