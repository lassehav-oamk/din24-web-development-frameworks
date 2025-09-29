import { useState, useEffect } from 'react'

export default function RecipeApiDemo() {

    const [recipes, setRecipes] = useState([]);

    async function loadRecipeData() {
        const response = await fetch('http://localhost:3000/recipes');
        const data = await response.json();
        console.log(data);
        setRecipes(data);
    }

    useEffect(() => {
        loadRecipeData()
    }, []);


    return (
        <div>
            {
                recipes.map(r => {
                    return (
                        <div style={{ border: '1px solid black', display: 'flex', margin: '10px', justifyContent: 'space-between'}}>
                            <div>{ r.name }</div>
                            <div>{ r.category }</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
