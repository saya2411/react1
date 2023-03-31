import { Component } from "react";
import ClassCom from "./ClassCom";
import FunctionalCom from "./FunctionalCom";
import './appclass.css'

class AppClass extends Component{
    constructor(){
        super();

        this.state={
            functionClick : false,
            classClick : false,
        }
    }
    render(){
        return (
            <>
            <div>
                <h1>Styling using Functional and Class Component</h1>
                
                <button className='btn1' onClick={() => this.setState({functionClick: !this.state.functionClick})}>Functional Click</button>

                <button className='btn1' onClick={() => this.setState({classClick: !this.state.classClick})}>Class Click</button>
        
        
                <div className="background">
                    <div>
                        {this.state.functionClick && <FunctionalCom/>}
                    </div>
                    <div>
                        {this.state.classClick && <ClassCom/>}
                    </div>
                </div>
                        
            </div>
            </>
        );
    }
}

export default AppClass