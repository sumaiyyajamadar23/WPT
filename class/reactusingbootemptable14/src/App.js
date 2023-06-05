import React,{Component} from 'react' 
import Emptable from './component/Emptable'
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      arr:["sam","jam","p","l","q"]
    }
  }
  addname=(nm)=>
  {
    this.setState({...this.state,arr:[...this.state.arr,nm]})
  }
  render()
  {
    return(
      <div>
        <h1>HOPE</h1>
        <Emptable empdata={this.state.arr} insertData={this.addname}/>
      </div>
    )
  }
}

export default App;
