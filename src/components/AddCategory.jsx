import React, { useState } from 'react'
import PropTypes from 'prop-types'


function AddCategory( { setCategories } ) {



    // State
    const [ inputValue, setInputValue ] = useState( '' )



    // Fn
    const handleInputChange = e => {
        setInputValue( e.target.value )
    } 

    const handleSubmit = e => {
        e.preventDefault()
        if( inputValue.trim().length > 2 ) {
            setCategories( categories => [ inputValue, ...categories ] ) // La función que modifica el State en el Hook Use State tiene un Callback el cual da como argumento el valor actual del Estado (En este caso Categories)
            setInputValue( '' )
        }
    }


    return (
        <form
            onSubmit={ handleSubmit } >
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInputChange } />
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



export default AddCategory