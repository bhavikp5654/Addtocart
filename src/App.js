
import './App.css';
import Header from './Components/Header/Header';
import {Routes , Route} from 'react-router-dom'
import Cards from './Components/cards/Cards';
import Mens from './Components/Mens';
import Carddetails from './Components/Carddetails/Carddetails';
 
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<Cards />}/>
      <Route path='/mens' element={<Mens />}/>
      <Route path='/cart/:id' element={<Carddetails />}/>


     </Routes>
    </div>
  );
}

export default App;
