import React, { Component } from 'react';
//import uuid from 'uuid';
import ProjectItem from './ProjectItem';

class Projects extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {

        let projectItems;

        if(this.props.projects){

            projectItems = this.props.projects.map(project => {
                //This loops through all objects in array 'projects'

                return(
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id}  project={project}/>
                )



            });
        };



        return (
            <div>

                {projectItems} <br />

            </div>
        )
    };
};

export default Projects;