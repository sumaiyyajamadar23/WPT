import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Header from "./components/Header"
function App() {
  return (
    <div className="App">
       <Header></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          List dekho
        </p>
        <List></List>
        
    </div>
  );
}

export default App;
