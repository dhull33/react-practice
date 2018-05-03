import React, { Component } from "react";
class AddProduct extends Component{
    state = {
        productName: "",
        productPrice: 0
    }
    render(){
        return(
        <div>
            <input
                type = "text"
                onChange = {this.productNameChangeHandler}
                value={this.state.productName} />
        </div>
        );
    }
}