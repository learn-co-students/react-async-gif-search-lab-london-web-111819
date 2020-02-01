import React from 'react';

class GifList extends React.Component {

    render(){
        return(
            <ul>
                {this.props.gifList.map(gif=>
                <li key={gif.id}>
                <h4>{gif.title}</h4>
                <img src={gif.images.downsized.url}></img>
                </li>
                )}
            </ul>
        )
    }
}

export default GifList;