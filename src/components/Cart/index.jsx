import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import CartContent from './CartContent'

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

    render() {
        const { cart } = this.props.cart
        const { amount } = this.props.cart
        return (
            <div className="cart__container">
                <p onClick={this.toggleCart.bind(this)}>Cart ({amount})</p>
                <Modal
                    className="cart__modal"
                    size='small'
                    closeIcon={true}
                    open={this.state.open}
                    onClose={this.toggleCart.bind(this)}
                >
                    <Modal.Header>
                        <h2>Your Cart</h2>
                    </Modal.Header>
                    <Modal.Content>
                        {amount > 0
                            ?   <CartContent cart={cart} amount={amount} />
                            :   <h3>Your cart is empty.</h3>
                        }
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default connect(store => {
    return { cart: store.cart }
})(Cart)