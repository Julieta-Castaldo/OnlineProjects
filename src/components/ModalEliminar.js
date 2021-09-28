import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

class ModalEliminar extends Component  {
    constructor(props){
        super(props);
        this.state = {
          show:false        
      }
    }

    eliminar(id){
      axios.delete(`https://estoes-node.herokuapp.com//${id}`)
      .then(res => {
          console.log(res);
          this.cerrar();
          this.props.refresh();
      })
  }

    mostrar() {
        this.setState({
            show: true,
        });
    }

    cerrar() {
        this.setState({
            show: false
        });
    }


    render(){
        return(
            <>
        <button class="btn" onClick={() => this.mostrar()}><i class="fa fa-trash-o"></i>&nbsp;&nbsp;Delete</button>
        <Modal show={this.state.show} onHide={() => this.cerrar()}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Project<strong>&nbsp;{this.props.datos.name}</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
              <div class="col-md-12"> 
                 Do you want to delete the project?
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.eliminar(this.props.datos._id)}>
              Yes
            </Button>
            <Button variant="danger" onClick={() => this.cerrar()}>
              No
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
        )
    }
}

export default ModalEliminar;