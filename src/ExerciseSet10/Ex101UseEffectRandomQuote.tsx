import { useState, useEffect }  from 'react'

export default function Ex101UseEffectRandomQuote() {
    const [quote, setQuote] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function getRandomQuote() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/quotes/random');
            setLoading(false);
            // check if the response is ok
            if (!response.ok) {
                console.log("Error fetching quote");
                return;
            }

            // convert the response to json
            const data = await response.json();
            
            console.log(data);
            setQuote(data.quote);
            setAuthor(data.author);
        } catch (error) {
            setLoading(false);
            console.log("Catched error:", error);
            setError("Error fetching quote, check your internet connection or the API URL" );
        }
    }

    useEffect(() => {
        getRandomQuote();
    }, [])

    return (
        <div>
            <h1>Random Quote App</h1>
            <div>The quote loads immediately on application startup - eg. when the component is mounted</div>
            <div>
                { quote }
                { loading && <p>Loading...</p> }
                <p><i>{ author }</i></p>
            </div>
            <div style={{ color: 'red' }}>
                { error }
            </div>
        </div>
    )
}
