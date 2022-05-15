import './App.css';
import FoodBar from './components/food-bar/food-bar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FoodBar/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
