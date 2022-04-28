import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';

const MealList = () => {

    const {loading, meals} = useGlobalContext();
    
    if(loading){
        return <Loading />
    }

    if(meals.length < 1){
        return( <h2 className='section-title'>
            There are no meals found matched your criteria
        </h2>)
    }

  return (
    <div>MealList Component</div>
  )
}

export default MealList
