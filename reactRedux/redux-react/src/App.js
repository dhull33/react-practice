import { connect } from "react-redux";
import Cart from "./Cart";

function mapStateToProps(state){
    return{
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

function mapDispatchToProps(dispatch){
    return{
    onAddProduct: (productName, productPrice) => dispatch(
        {
        type: "addProduct",
        productData: {
            productName: productName,
            productPrice: productPrice
            }
        })
    }
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)
