import React from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GiftListContainer extends React.Component {

    state = {
        gifs: null
    }

    componentDidMount() {
        return fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g&rating=g')
        .then(resp => resp.json())
        .then(output => this.setState({
            gifs: output.data.slice(0, 3)
        }))
    }

    changeBySearchTerm = (e) => {
        e.preventDefault()
        return fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.term.value}&api_key=dc6zaTOxFJmzC&rating=g&rating=g`)
        .then(resp => resp.json())
        .then(output => this.setState({
            gifs: output.data.slice(0, 3)
        }))
    }

    render() {
        return(
            <div className="search-container">
                <GifList gifs={this.state.gifs} />
                <GifSearch changeBySearchTerm={this.changeBySearchTerm}/>
            </div>
        )
    }
}