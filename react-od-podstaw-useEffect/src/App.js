import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [myFood, setMyFood] = useState("");

  useEffect(() => {
    console.log(`Co bym dzis zjadl ${myFood}`);

    return () => {
      console.log(`Ale sie najadlem ta ${myFood}`);
    }
  }, [myFood]);

  return (
    <div className="App">
      <button
        onClick={() => {
          let myNewFood = "pizza";

          if(myFood === "pizza") {
            myNewFood = "pierogi";
          }

          setMyFood(myNewFood);
        }}
      >
        Przycisk
      </button>
    </div>
  );
}

export default App;
