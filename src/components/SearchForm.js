import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    
    return (

    <div>SearchForm Component</div>

  )
}

export default SearchForm
