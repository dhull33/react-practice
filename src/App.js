import React, { Component } from 'react';
import Projects from './components/Projects.js';
import AddProjects from './components/AddProjects.js';
import PropTypes from 'prop-types';

//generates unique id's
import uuid from 'uuid';


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
                        id: uuid.v4(),
                        title: 'Digital Crafts',
                        category: 'Coding Boot Camp'
                    },

                    {
                        id: uuid.v4(),
                        title: 'University of Houston',
                        category: 'Houston Public University '
                    },

                    {
                        id: uuid.v4(),
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

    handleDeleteProject(id){
        let projects= this.state.projects;

        let index = projects.findIndex(x => x.id == id);

        projects.splice(index, 1);

        this.setState({project: projects});
    }

  render() {


        return (
          <div>
           {/*{<Projects projects={"Hello World!"} />} */}
            {/*Hello World*/}

            {/*projects is a child component of App?*/}
            <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />

              <AddProjects addProjects={this.handleAddProject.bind(this)} />

          </div>
        );
      }
}

export default App;
