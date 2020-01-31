import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component{

    state = {
        gifList:[]
    }

    getGifs = (query) => {
        const queryParsed = query.replace(/ /g,'%20')
        const url = `https://api.giphy.com/v1/gifs/search?q=${queryParsed}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(object => this.getThreeGifs(object.data) )
    }

    getThreeGifs = (gifList) => {
        this.setState({
            gifList: gifList.slice(0,3)
        })
    }

    render(){
        return(
            <div>
                <GifSearch getGifs={this.getGifs} />
                {this.state.gifList.map(gif => <GifList gif={gif.images.fixed_height_still.url}/>)}

            </div>    
        )
    }
}

export default GifListContainer