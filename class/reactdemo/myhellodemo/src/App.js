import logo from './logo.svg';
import './App.css';
import Myheader from './components/Myheader';
import CounterComponent from './components/counter';

function App() {
  return (
    <div className="App">
        <h1>Header</h1>
      <Myheader></Myheader>
     <h1>My name is sumaiyya</h1>
     <CounterComponent></CounterComponent>
    </div>
  );
}

export default App;
