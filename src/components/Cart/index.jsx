import React from 'react'
import { connect } from 'react-redux'
import CartContent from './CartContent'
import { VscChromeClose } from 'react-icons/vsc'

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false   
        }
    }
    
    toggleCart() {
        this.setState({
            open: !this.state.open
        })
    }

    handleChildClick(e) {
        e.stopPropagation()
    }

    render() {
        const { cart, amount } = this.props.cart
        const { open } = this.state
        return (
            <div className="cart__container">
                <p onClick={this.toggleCart.bind(this)}>Cart ({amount})</p>
                { this.state.open
                    ?   <div className="cart__modal-dimmer" onClick={this.toggleCart.bind(this)}>
                            <div className="cart__modal" onClick={this.handleChildClick}>
                                <div className="cart__modal-header">
                                    <h2>Your Cart</h2>
                                    <VscChromeClose className="cart__modal-close" onClick={this.toggleCart.bind(this)}/>
                                </div>
                                <div className="cart__modal-content">
                                    {amount > 0
                                        ?   <CartContent cart={cart} amount={amount} open={open} />
                                        :   <h3>Your cart is empty.</h3>
                                    }
                                </div>
                            </div>
                        </div>
                    : null
                }
            </div>
        )
    }
}

export default connect(store => {
    return { cart: store.cart }
})(Cart)