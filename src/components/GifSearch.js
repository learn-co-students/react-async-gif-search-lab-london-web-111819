import React from 'react';

class GifSearch extends React.Component {

    render(){

        const {initiateSearch, updateSearchTerm} = this.props

        return(
            <form onSubmit={(e)=>initiateSearch(e)}>
                <input onChange={(e)=>updateSearchTerm(e.target.value)} type='text' placeholder='enter...'></input>
                <button>Search!</button>
            </form>
        )
    }
}

export default GifSearch;