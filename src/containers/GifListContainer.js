import React from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        gifList: [],
        searchTerm: 'cat'
    }

    updateSearchTerm = (searchTerm) => {
        searchTerm = searchTerm.replace(/ /g,'%20')
        this.setState({ searchTerm})
    }

    initiateSearch = (e) => {
        e.preventDefault()
        const BASE_1 = 'https://api.giphy.com/v1/gifs/search?q='
        const API_KEY = 'PDX9RyyVdHLjYdbiDXcrnHmYAjXtIKNl'
        const BASE_2 = '&api_key='
        const BASE_3 = '&rating=g'
        let constructedURL = `${BASE_1}${this.state.searchTerm}${BASE_2}${API_KEY}${BASE_3}`
        
        fetch(constructedURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                gifList: data.data.slice(0,3)
                })
            })
        }

    render(){
        return(
            <div>
                <GifSearch initiateSearch={this.initiateSearch} updateSearchTerm={this.updateSearchTerm}/>
                <GifList gifList={this.state.gifList}/>
        </div>
        )
    }

}

export default GifListContainer;