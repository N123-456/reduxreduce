import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop'
import AddTodo from './Component/AddTodo';
import DisplayTodos from './Component/DisplayTodos';
function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
   <Shop/>
    </div>
    </>
  );
}

export default App;
