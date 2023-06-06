import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component215/Header';
import EmployeeTable from './component215/EmployeeTable';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <EmployeeTable></EmployeeTable>
    </div>
  );
}

export default App;
