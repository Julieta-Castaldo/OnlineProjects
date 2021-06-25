import React, { Component } from "react";
import { Breadcrumb, Navbar } from "react-bootstrap";
import ListadoApi from '../components/ListadoApi';
import axios from 'axios';
import { Link } from "react-router-dom";
import ModalAñadir from '../components/ModalAñadir';
import Paginator from '../components/Paginator';



class Listado extends Component {
    constructor(){
        super();
        this.state = {
          api:null
        }
        this.refresh = this.refresh.bind(this)
    }

    componentDidMount(){
      axios.get(`https://julinode.herokuapp.com/`)
        .then(res => {
          console.log(res)
          this.setState({
            api:res.data
          })
        })
    }

    refresh(){
      axios.get(`https://julinode.herokuapp.com/`)
        .then(res => {
          console.log(res)
          this.setState({
            api:res.data
          })
        })
    }

    render() {
        if (this.state.api != null) {
        return(
          
            <div>
            <Navbar>
              <Navbar.Brand><strong>My projects</strong></Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                 <ModalAñadir  refresh={this.refresh}></ModalAñadir>
               </Navbar.Collapse>
          </Navbar>     
                                                       
            <div class="container-fluid col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-body">                            
                  <table class="table table-hover">                          
                    <tbody>
                    {this.state.api.map(datos => <ListadoApi datos={datos} refresh={this.refresh}/>)}              
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
              <div className="paginator justify-content-center mg-0 row">
                <Paginator></Paginator>
                </div>
            </div>
          
            
          )
        } else {
          return(
            <div>Cargando</div>
          )
        }
        
    }
}

export default Listado;