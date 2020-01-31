import React, { Component } from 'react'

class GifSearch extends Component{
    
    state = {
        searchTerm: null
    }

    updateSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value 
        })
    }

    render(){

        return(
            <div>
                <label>Enter a search term:</label>
                <input onChange={this.updateSearchTerm}/>
                <button onClick={() => this.props.getGifs(this.state.searchTerm)}>Find Gifs</button>
                
            </div>
        )
    }
}

export default GifSearch