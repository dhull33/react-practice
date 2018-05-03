import React, { Component } from 'react';
import AddProduct from './AddProduct'


class AddProduct extends Component {
    render() {
        return (
            <div className="App-intro">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Product Price
                            </th>
                            <th>
                                $
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.productCart.map(productData => {
                        <tr> </tr>


                        }

                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;