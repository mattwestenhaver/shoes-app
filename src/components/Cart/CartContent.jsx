import React from 'react'
import { connect } from 'react-redux'
import { removeShoe } from '../../redux/actions'

class CartContent extends React.Component {
    removeFromCart(id) {
        this.props.removeShoe(id)
    }

    convertPrice(price) {
        return (price / 100).toFixed(2)
    }

    calculateCartTotal() {
        var { cart } = this.props
        var total = Object.keys(cart).reduce((initialValue, item) => {
            return initialValue + (cart[item].shoe.price.amount * cart[item].amount)
        }, 0)

        return (total / 100).toFixed(2)
    }
    
    render() {
        const { cart } = this.props
        return (
            <div>
                {Object.keys(cart).map((key) => {
                    return (
                        <div key={key}>
                            <h4>
                                {cart[key].shoe.name} x {cart[key].amount} - ${this.convertPrice(cart[key].shoe.price.amount * cart[key].amount)}
                                <button onClick={this.removeFromCart.bind(this, key)}>remove</button>
                            </h4>
                            
                        </div>
                    )
                })}
                <h2>Total: ${this.calculateCartTotal()}</h2>
            </div>
            
        )
    }
}

export default connect(
    null,
    { removeShoe }
)(CartContent)