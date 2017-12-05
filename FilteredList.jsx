import React, { Component } from 'react';

import ListSorter from './ListSorter';
import List from './List';


import {DropdownButton, MenuItem} from 'react-bootstrap';

/*
A class that renders dropdowns, a search bar,
and the items that match the search
*/



class FilteredList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: "",
            band: "",
            genre: "",
            sortby: ""
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        /* 
        Filter based on the different categories
        */
        if ((item.band == this.state.band && (item.genre == this.state.genre || this.state.genre == "all"))
         || (item.genre == this.state.genre && (item.band == this.state.band || this.state.band == "all"))
         || (this.state.band == "all" && this.state.genre == "all")) {
        return item.name.toLowerCase().search(this.state.search) !== -1;
        }
    }

    //sets the band to what was clicked
    handleClick = (eventKey, event) => {
        this.setState({band: eventKey})
    }

    //sets the genre to the one clicked
    handleClick2 = (eventKey, event) => {
        this.setState({genre: eventKey})
    }

    //sort items by selected category
    handleClick3 = (eventKey, event) => {
        this.setState({sortby: eventKey})
    }



    // renders the graphical elements of the page
    render() {
        return (
            <div className="filter-list">
                <h1><div class = "title">Album Filter</div></h1>
                <div class = "input_item">
                    <DropdownButton id="typeDropdown" title={"Band"} bsSize="large">
                      <MenuItem eventKey="all" onSelect={this.handleClick}>All</MenuItem>
                      <MenuItem eventKey="The Beatles" onSelect={this.handleClick}>The Beatles</MenuItem>
                      <MenuItem eventKey="Pink Floyd" onSelect={this.handleClick}>Pink Floyd</MenuItem>
                      <MenuItem eventKey="Bob Dylan" onSelect={this.handleClick}>Bob Dylan</MenuItem>
                    </DropdownButton>
                    <DropdownButton id="typeDropdown" title={"Genre"} bsSize="large">
                      <MenuItem eventKey="all" onSelect={this.handleClick2}>All</MenuItem>
                      <MenuItem eventKey="Rock" onSelect={this.handleClick2}>Rock</MenuItem>
                      <MenuItem eventKey="Folk" onSelect={this.handleClick2}>Folk</MenuItem>
                    </DropdownButton>
                    <DropdownButton id="typeDropdown" title={"Sort by"} bsSize="large">
                      <MenuItem eventKey="year" onSelect={this.handleClick3}>Year</MenuItem>
                      <MenuItem eventKey="name" onSelect={this.handleClick3}>Name</MenuItem>
                    </DropdownButton>
                   
                    <input type="text" placeholder="Search by album title" onChange={this.onSearch}  />
                </div>
                <div class="filters">
                    Band: {this.state.band} | Genre: {this.state.genre} | Sorted by: {this.state.sortby}
                </div>
                <ListSorter items={this.props.items.filter(this.filterItem)} sorter={this.state.sortby} />
            </div>
        );
    }
}
export default FilteredList;
