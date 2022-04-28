import React, { useState, useContext, useEffect } from 'react'
import App from './App';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [meals, setMeals] = useState([]);

    const fetchMeals = async () => {
        setLoading(true);
        try{
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const {meals} = data;

            if(meals){
                const newMeals = meals.map((item) => {
                    const {
                        idMeal,
                        strMeal,
                        strCategory,
                        strArea,
                        strMealThumb,
                    } = item;

                    return {
                        id: idMeal,
                        name: strMeal,
                        category: strCategory,
                        image: strMealThumb,
                        area: strArea}
                })
                setMeals(newMeals);
            }else{
                setMeals([]);
            }
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchMeals();
    }, [searchTerm])

    return (
        <AppContext.Provider
            value={{loading, searchTerm, meals, setSearchTerm}}>
        
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}
