import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
      </header>
    </div>
  );
}

export default App;
