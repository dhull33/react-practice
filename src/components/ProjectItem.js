import React, { Component } from 'react';



class ProjectItem extends Component {

    deleteProject(id){
        console.log(this.props.project.id);

        this.props.onDelete(id);
    }


    render() {
        return (
            <li>

                <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>

                    <b>{this.props.project.id}:</b>
                    {this.props.project.title}-
                    {this.props.project.category}

                </a>
                <br />

            </li>


        );
    }
}

export default ProjectItem;