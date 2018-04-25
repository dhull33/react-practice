import React, { Component } from 'react';
import Projects from './components/Projects.js';
import AddProjects from './components/AddProjects.js';
import './App.css';

class App extends Component {

    constructor(){
        super();

        //S
        this.state= {
            projects: []
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

    handleAddProject(project){;
        console.log('What is being sent to us');
        console.log(project);

        let projects= this.state.projects;

        projects.push(project);

        this.setState({project: projects});
    }

  render() {


        return (
          <div>
           {/*{<Projects projects={"Hello World!"} />} */}
            {/*Hello World*/}

            {/*projects is a child component of App?*/}
            <Projects projects={this.state.projects} />

              <AddProjects addProjects={this.handleAddProject.bind(this)} />

          </div>
        );
      }
}

export default App;
