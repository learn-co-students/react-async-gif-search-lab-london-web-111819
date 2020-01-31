import React from 'react';

export default class GifSearch extends React.Component {

    state = {
        searchTerm: null
    }

    changeSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={ (e) => this.props.changeBySearchTerm(e)}>
                <input onChange={this.changeSearchTerm} type="text" name="term" placeholder="input search"></input>
                <input type="submit"></input>
            </form>
        )
    }
}