import React from 'react'
import { connect } from 'react-redux'
import { removeShoe, addShoe } from '../../redux/actions'

class CartContent extends React.Component {
    addToCart(shoe) {
        this.props.addShoe(shoe)
    }
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
            <div className="cart__content">
                {Object.keys(cart).map((key) => {
                    return (
                        <div key={key} className="cart-item__container">
                            <div className="cart-item__thumbnail">
                                <img src={cart[key].shoe.image.url} alt={"image of " + cart[key].shoe.name} />
                            </div>
                            <div className="cart-item__info">
                                <h3>{cart[key].shoe.name}</h3>
                                <div>
                                    <p>Quantity: {cart[key].amount}</p>
                                    <button className="cart-item__add" onClick={this.addToCart.bind(this, cart[key].shoe)}>+</button>
                                    <button className="cart-item__remove" onClick={this.removeFromCart.bind(this, key)}>-</button>
                                </div>
                            </div>
                            <div className="cart-item__price">
                                <h3>${this.convertPrice(cart[key].shoe.price.amount * cart[key].amount)}</h3>
                            </div>
                        </div>
                    )
                })}
                <h3 className="cart__total">Total: ${this.calculateCartTotal()}</h3>
            </div>
            
        )
    }
}

export default connect(
    null,
    { removeShoe, addShoe }
)(CartContent)