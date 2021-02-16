import React from 'react'
import auth from '../../auth'
import Tile from './Tile'

class Shoes extends React.Component {

    constructor() {
        super()
        this.state = {
            shoes: []
        }
    }

    componentDidMount() {
        auth.getShoes().then(data => {
            this.setState({
                shoes: [...data.products]
            })
        })
    }

    render() {

        const { shoes } = this.state
        return (
            <div className="shoes__container">
                <h1>Simply Shoes</h1>
                <div className="shoes-tile__container">
                    {shoes.map(shoe => {
                        return (
                            <Tile shoe={shoe} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Shoes