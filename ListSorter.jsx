import React, { Component } from 'react';
import List from './List';

/*
A class that sorts an array of items and 
renders it using List
*/
class ListSorter extends Component {
    
        render() {
        // if sortby is year, albums are ordered by year
        if(this.props.sorter == "year") {
          this.props.items.sort(function(a, b) {
              var yearA = a.year; // 
              var yearB = b.year; 
              if (yearA < yearB) {
                return -1;
              }
              if (yearA > yearB) {
                return 1;
              }
              return 0;
            });
          //if sortby is name, albums are sorted by name
        } else if (this.props.sorter == "name") {
          this.props.items.sort(function(a, b) {
              // ignore upper and lowercase
              var nameA = a.name; 
              var nameB = b.name; 
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              // names must be equal
              return 0;
            });
        }
        // pass into list with the items sorted
        return (
            <List items={this.props.items} />
        );
        }
}

export default ListSorter;