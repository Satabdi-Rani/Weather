import React, {useState} from 'react'
import axios from 'axios'

function App() {
  // const url =`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=9dc5f4e2537673766aa2c36f9457fc8f`;
  return (
    <div className="App">
       <div className="container">
          <div className="top">
              <div className="location">
                  <p>Dhaka</p>
              </div>
              <div className="temp">
                  <h1>65F</h1>
              </div> 
          </div>
        <div className="bottom"></div>
       </div>
    
    </div>
  );
}

export default App;
