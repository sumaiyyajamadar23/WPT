import {useState} from 'react'
import Emptab from './suppliers/Emptab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heade from './suppliers/Heade';
function App()
{
  let [emarr,setemarr]=useState([{empid:2190,ename:"sam",sal:123456},
{empid:1890,ename:"pre",sal:789101}])
let addEmp=(emp)=>{
  console.log("in app add",emp)
  setemarr([...emarr,{empid:parseInt(emp.empid),ename:emp.ename,sal:parseInt(emp.sal)}]);
}
return(
  <div>
    <Heade></Heade>
    <Emptab array={emarr} insertEmp={addEmp}></Emptab>
  </div>
)
}

export default App;
