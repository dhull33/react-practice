import React, { Component } from 'react';

class AddProjects extends Component {

    constructor(){
        super();
        this.state = {
            newProject: {}
        }

    }


    static defaultProps= {
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
                        title: this.refs.title.value,
                        category: this.refs.category.value
                    }
            }, function(){
                this.props.AddProjects(this.state.newProject);
                }
                )

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

export default AddProjects;