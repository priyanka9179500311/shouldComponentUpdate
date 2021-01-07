//Import Area
//Import Something from 'somelibrary';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//Create an Class Component
class Myclass extends Component{
    //1. Property
    state ={};

    //2. Constructor
    constructor(props){
        super(props);
        this.state.favcolor= "red";
    }

    //3. Method
    //Every Method Must have render method
    changeColor = ()=>{
       // alert ('ok');
        this.setState({favcolor: "blue"});
    };
    render(){
        //Render Method always return HTMl
        return(
            <div>
                <h1>My favourite Color is  {this.state.favcolor}</h1>
                <button  onClick={this.changeColor}>Click Me!</button>
            </div>
        );
    }
    shouldComponentUpdate(){
        return true;
    }
}
//Object.Method();
ReactDOM.render(<Myclass/>,document.getElementById('root'));//Actual Argument