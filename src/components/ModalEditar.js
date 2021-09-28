import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

class ModalEditar extends Component  {
    constructor(props){
        super(props);
        this.state = {
            nameForm:'',
            descriptionForm:'',
            statusForm:'',
            managerForm:'',
            assignedForm:'',
            show:false,
            mensaje: null        
        }
    }

   
    editar(id){
        if ((this.state.nameForm == '') || (this.state.descriptionForm == '') || (this.state.managerForm == 'Select a person') || (this.state.assignedForm == 'Select a person') || (this.state.statusForm == '')) {
            this.setState({
                mensaje: 'Please complete'
            })
        } else {
        axios.put(`https://estoes-node.herokuapp.com/${id}`,
        {
          "name": this.state.nameForm,
          "description": this.state.descriptionForm,
          "manager":this.state.managerForm,
          "assigned":this.state.assignedForm,
          "status":this.state.statusForm
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
           this.setState({
            show:false
          })
          this.props.refresh();
        })
       

    }}

    mostrar() {
        this.setState({
            show: true,
            nameForm: this.props.datos.name,
            descriptionForm: this.props.datos.description,
            managerForm:this.props.datos.manager,
            assignedForm:this.props.datos.assigned,
            statusForm:this.props.datos.status
           
        });
    }

    cerrar() {
        this.setState({
            show: false, mensaje:null
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }

    render(){
        return(
            <>
        <button class="btn" onClick={() => this.mostrar()} ><i class="fa fa-pencil-square-o"></i>&nbsp;&nbsp;Edit</button>
        <Modal show={this.state.show} onHide={() => this.cerrar()}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Project<strong>&nbsp;{this.props.datos.name}</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
              <div class="col-md-12"> 
                <form>
                  
                  <div class="">
                    <div>
                      <div class="form-group">
                        <label>Project name</label>
                        <input class="form-control col-xs-12 col-md-12 col-lg-12" type="text" name="nameForm" value={this.state.nameForm} onChange={this.handleChange.bind(this)}></input>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                        <label>Description</label>
                        <input class="form-control col-xs-12 col-md-12 col-lg-12" type="text" name="descriptionForm" value={this.state.descriptionForm} onChange={this.handleChange.bind(this)}></input>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                      <label >Project Manager</label>
                          <Form.Control as="select" type="text" name="managerForm" value={this.state.managerForm} onChange={this.handleChange.bind(this)}>
                           <option>Select a person</option>
                           <option>Germán</option>
                           <option>Julieta</option>
                           <option>Natalia</option>
                           </Form.Control>
                        
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div>
                      <div class="form-group">
                      <label >Assigned to</label>
                          <Form.Control as="select" type="text" name="assignedForm" value={this.state.assignedForm} onChange={this.handleChange.bind(this)}>
                           <option>Select a person</option>
                           <option>Germán</option>
                           <option>Julieta</option>
                           <option>Natalia</option>
                           </Form.Control>
                        
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div>
                      <div class="form-group">
                      <label >Status</label>
                          <Form.Control as="select" type="text" name="statusForm" value={this.state.statusForm} onChange={this.handleChange.bind(this)}>
                           <option>Enabled</option>
                           <option>In progress</option>
                           <option>Done</option>
                          </Form.Control>
                        
                      </div>
                    </div>
                  </div>
                
                </form>
                {(this.state.mensaje != null) ?
                <Alert variant="danger">
                    {this.state.mensaje}
                </Alert>
                :
                null
                }
                    
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.editar(this.props.datos._id)}>
              Save changes
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
        )
    }
}

export default ModalEditar;