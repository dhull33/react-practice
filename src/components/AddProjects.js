import React, { Component } from 'react';
import uuid from 'uuid';
import propTypes from 'prop-types';
class AddProjects extends Component {

    constructor(){
        super();
        this.state = {
            newProject: {}
        }

    }


    static defaultProps= {
        //This is what we want to show up in our drop down
        categories: ['Coding Boot Camp', 'Houston Public University', 'Best university evaaaaaaaa']
    };

    handleSubmit(e){

        console.log("Submitted that  shit!");
        console.log(this.refs.title.value);
        e.preventDefault();

    //    Test information
        if(this.refs.title.value === ''){

            alert('title is required');
        }
        else{

            //this.setState is how we update our state
            this.setState(
                {newProject: {
                        id: uuid.v4(),
                        title: this.refs.title.value,
                        category: this.refs.category.value
                    }
            }, function(){
                //  addProjects is the name of a property that is set in App.js in <AddProjects addProject={} />
                this.props.addProjects(this.state.newProject);

                })

        }
    }






    render(){


        let categoryOptions = this.props.categories.map(category => {

            return <option key={category} value={category}> {category}</option>
        })

        return(
            <div>
                <h1>Add Projects</h1>

                {/*Need the 'bind' operator in order to use functions */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />

                    </div>


                    <div>
                        <label>Category</label><br />

                        <select ref="category" >

                            {categoryOptions}

                        </select>


                    </div>
                    <input type="submit" value="submit" />

                </form>
            </div>
        )
    }
}

AddProjects.propTypes= {
    categories: propTypes.array,
    addProject: propTypes.func
}
export default AddProjects;