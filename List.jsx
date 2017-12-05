 
import React, { Component } from 'react';
import './List.css';

/*
A class that returns a list of elements with their name, band, and year
given a list of items
*/
class List extends Component {
    renderList() {

        // go through the items and put the relevent info in the list elements
        const items = this.props.items.map(item => {
            return <li key={item.name}> 
                      <div class = "album_item">
                        <img src={item.cover} height="300px" width="300px" />
                        <p>{item.name} </p>
                        <p>{item.band}</p>
                        <p>{item.year}</p>
                      </div> 
                    </li>
        });

        return items;
    }

    render() {
        //return a list iwth all these elements
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;
