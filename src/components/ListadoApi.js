import React, { Component } from "react";
import axios from 'axios';
import ModalEditar from './ModalEditar';
import ModalEliminar from "./ModalEliminar";
import Dropdown from 'react-bootstrap/Dropdown'
import fotocv from '../imagen/fotocv.jpg'



class ListadoApi extends Component {
    constructor(props){
        super(props);
    }

    eliminar(id){
        axios.delete(`https://julinode.herokuapp.com/${id}`)
        .then(res => {
            console.log(res);
            this.props.refresh();
        })
    }
 
    render() {
        return(           
            <tr className="color_listado">
            <td>
                <h4><strong>{this.props.datos.name}</strong></h4> 
                <div className="fecha">Creation date: {this.props.datos.date}</div>
                <img src={this.props.datos.image} width="25px" style={{borderRadius:20, marginRight:10}}></img>                
                <strong>{this.props.datos.assigned} </strong>     
            </td>
                <td class="text-right">  
                <Dropdown>
                    <Dropdown.Toggle className="opciones">
                        <i class="fa fa-ellipsis-v" style={{color:'black'}}></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item><ModalEditar datos={this.props.datos}  refresh={this.props.refresh} ></ModalEditar></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item ><ModalEliminar datos={this.props.datos}  refresh={this.props.refresh}></ModalEliminar></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </td>
            </tr>
            
        )
    }
}

export default ListadoApi;