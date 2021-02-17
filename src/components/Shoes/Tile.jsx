import React from 'react'
import { connect } from 'react-redux'
import { addShoe } from '../../redux/actions'
import { toast } from 'react-toastify';

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shoe: props.shoe
        }
    }

    convertPrice(price) {
        return (price / 100).toFixed(2)
    }

    addToCart() {
        this.props.addShoe(this.state.shoe)
        toast(`${this.state.shoe.name} added to cart.`);   
    }

    render() {
        const { shoe } = this.state
        return (
            <div className="tile__container">
                <div className="tile__gradient">
                    <img src={shoe.image.url} alt={"image of " + shoe.name} />
                </div>
                <div className="tile__info">
                        <h2>{shoe.name}</h2>
                        <p>{shoe.price.currency === "USD" ? "$" : null}{this.convertPrice(shoe.price.amount)}</p>
                </div>
                <div className="tile__button">
                    <button onClick={this.addToCart.bind(this)}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addShoe }
)(Tile)