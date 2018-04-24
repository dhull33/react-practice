import React, { Component } from 'react';
import Projects from './components/Projects.js';
import './App.css';

class App extends Component {

    constructor(){
        super();

        //S
        this.state={

        }
    }

    componentWillMount(){
        this.setState(
            {
                projects: [
                    {
                        title: 'Digital Crafts',
                        category: 'Coding Boot Camp'
                    },

                    {
                        title: 'University of Houston',
                        category: 'Houston Public University '
                    },

                    {
                        title: 'University of Texas at Austin',
                        category: 'Best University evaaaaaaaaa'
                    }
                ]
            }
        )
    }

  render() {

        console.log(this.state);
        return (
          <div>
           {/*{<Projects projects={"Hello World!"} />} */}
            {/*Hello World*/}
            <Projects projects={this.state.projects}/>
          </div>
        );
      }
}

export default App;
