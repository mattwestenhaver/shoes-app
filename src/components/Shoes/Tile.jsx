import React from 'react'
import { connect } from 'react-redux'
import { addShoe } from '../../redux/actions'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shoe: props.shoe
        }
    }

    addToCart() {
        this.props.addShoe(this.state.shoe)
    }

    render() {
        const { shoe } = this.state
        return (
            <div className="tile">
                <div className="tile__container">
                    <div className="tile__gradient">
                        <img src={shoe.image.url} alt={"image of " + shoe.name} />
                    </div>
                    <div className="tile__info">
                        <div>
                            <h2>{shoe.name}</h2>
                            <p>{shoe.price.amount}</p>
                        </div>
                        <div>
                            <button onClick={this.addToCart.bind(this)}>add shoe</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addShoe }
)(Tile)