import React, { useEffect, useState, useReducer } from 'react';
import './App.css';


// http://api.tvmaze.com/singlesearch/shows?q=girls

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState("girls");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const myFetch = async () => {
      setIsLoading(true);
      const response = await fetch(`http://api.tvmaze.com/singlesearch/shows?q=${movie}`);
      try {
      const responseParsed = await response.json();
      
      setIsLoading(false);
      setFetchedData(responseParsed);
      } catch(error) {
        setIsLoading(false);
        setError(error);
      }
    }

    myFetch();
  }, [movie])

  console.log(fetchedData);
  if(isLoading) {
    return <p> Loading... </p>
  }

  if(error) {
    return <p>Error!</p>
  }
  
  return (
    <div className="App">
      <button
        onClick={() => setMovie("*")}
      >
        Click me
      </button>

      Hello World
    </div>
  );
}

export default App;
