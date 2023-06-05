import {useState} from 'react';
const Emptable=(props)=>
{
    let [myname,setmyname]=useState("")
    let adduser=()=>
    {
        
        props.insertData(myname)
    }
    
    let renderTable=props.empdata.map((name,index)=><tr key={index}><td>{name}</td></tr>)
    return(
    
        <div>
           <input type='text'name='nm' id='nm'
            value={myname} 
            onChange={(ev)=>{setmyname(ev.target.value)}}>

            </input>
           <button type='button' name='btn' id='btn' onClick={adduser}>Add new user</button>
           <table border='2'>
        <thead>
        <tr>
            <th>employee name</th>
        </tr>
        </thead>
        <tbody>
           {renderTable}

        </tbody>
       
               
        </table>
        </div>
    )
}
export default Emptable;