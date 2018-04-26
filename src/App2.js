import React, { Component } from 'react';

class App2 extends Component {

    constructor(){
        super();

        this.state={val:0};
    }

    update(){
        this.setState(
            {
                val: this.state.val + 1
            }
        )
    };


    componentWillMount(){
        console.log("ComponentWillMount");
    }


    componentDidMount(){
        console.log('ComponentDidMount');
    }


    render(){
        console.log('rendered');


        return(

            <button onClick={this.update.bind(this)}>{this.state.val}</button>
        );
    }
}

export default App2;