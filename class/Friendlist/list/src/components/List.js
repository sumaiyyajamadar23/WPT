import React,{Component} from "react";
class List extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            names:["A","S","P","R"],
            count:3}
    }
    renderlist()
    {
        return this.state.names.map((a,index)=><li key={index}>{a}</li>)
    }
    render()
    {
        return( 
             <div>
               <div>
            <h1>My list</h1>
            <ul>
                {this.renderlist()}
            </ul>
            </div>
            </div>)
      
    }
}
 export default List;