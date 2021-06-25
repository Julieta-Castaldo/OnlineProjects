import React, { Component } from "react";
import Pagination from 'react-bootstrap/Pagination';

class Paginator extends Component {
  render() {
    return(
      <Pagination style={{backgroundColor:'red'}}>
        <Pagination.First />
        <Pagination.Prev />              
        <Pagination.Item active>{1}</Pagination.Item>            
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
            
        )
    }
}

export default Paginator;