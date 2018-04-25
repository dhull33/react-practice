import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
    render() {

        let projectItems;

        if(this.props.projects){

            projectItems = this.props.projects.map(project => {
                //This loops through all objects in array 'projects'

                return(
                    <ProjectItem key={project.title}  project={project}/>
                )



            });
        };



        return (
            <div>

                {projectItems} <br />
                What the devil?!?!?!

            </div>
        )
    };
};

export default Projects;