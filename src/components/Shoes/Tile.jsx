import React from 'react'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shoe: props.shoe
        }
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
                        <h2>{shoe.name}</h2>
                        <p>{shoe.price.amount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tile