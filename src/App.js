import {  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  }  from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Restaurants from './components/Restaurants'
function App() {
  return (
    <Router>
    <div className="App">
    
     <Routes>
      <Route  path='/' element = {< Home/>} />
      <Route  path='/Login' element = { <Login/> } />
      <Route path='/:restaurant_id' element = {<Restaurants/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;