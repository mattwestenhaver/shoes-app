import React from 'react'
import auth from '../../auth'
import Tile from './Tile'

class Shoes extends React.Component {

    constructor() {
        super()
        this.state = {
            shoes: [],
            searchValue: ''
        }
    }

    handleSearch = (e) => {
        this.setState({
            searchValue: e.currentTarget.value
        })
    }

    checkSearchResultsLength(shoes) {
        return shoes.filter(shoe => shoe.name.toLowerCase().includes(this.state.searchValue)).length
    }

    componentDidMount() {
        auth.getShoes().then(data => {
            this.setState({
                shoes: [...data.products]
            })
        })
    }

    render() {
        const { shoes, searchValue } = this.state
        return (
            <div className="shoes__container">
                <div className="shoes__header">
                    <h1>Simply Shoes</h1>
                    <input className="search-input" value={this.state.searchValue} placeholder="Search..." onChange={this.handleSearch}/>
                </div>
                {this.checkSearchResultsLength(shoes)
                    ?   <div className="shoes-tile__container">
                            {shoes.filter(shoe => shoe.name.toLowerCase().includes(searchValue)).map(shoe => {
                                return (
                                        <Tile key={shoe.id} shoe={shoe} />
                                )
                            })}
                            <div className="flex-empty"></div>
                            <div className="flex-empty"></div>
                        </div>
                    :   <div className="shoes__no-results">
                            <h2>No results match your search.</h2>
                        </div>
                }
            </div>
        )
    }
}

export default Shoes