import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

class ModalAñadir extends Component  {
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

    agregar(){
     if ((this.state.nameForm == '') || (this.state.descriptionForm == '') || (this.state.managerForm == '') || (this.state.assignedForm == '') || (this.state.statusForm == '')) 
      {
        this.setState({
            mensaje: 'Please complete'
        })
    } else{ 
        let fecha = new Date();
        fecha = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear() + " " + fecha.getHours()+ ":" + fecha.getMinutes(); 
        fecha.toString();
        let imagen = 'https://tse1.mm.bing.net/th?id=OIP.1d65Lz0oKjJ_n7gEouaYkQHaHa&pid=Api&P=0&w=300&h=300'  
        axios.post(`https://julinode.herokuapp.com/`,
        {
          "name": this.state.nameForm,
          "description": this.state.descriptionForm,
          "status": this.state.statusForm,
          "manager": this.state.managerForm,
          "assigned": this.state.assignedForm,
          "date": fecha,
          "image": imagen
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({
            nameForm:'',
            descriptionForm:'',
            statusForm:'',
            managerForm:'',
            assignedForm:'',
            show:false,
            mensaje: null
          })
          this.props.refresh();  //Renderizado del nuevo proyecto
        })


       
    }}

    mostrar() {
        this.setState({
            show: true,
            nameForm:'',
            descriptionForm:'',
            
        });
    }

    cerrar() {
        this.setState({
            show: false
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value }); 
     }

    render(){
        return(
            <>
            <Button variant="danger" onClick={() => this.mostrar()}>
                  + Add project
            </Button>

        <Modal show={this.state.show} onHide={() => this.cerrar()}>
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
              <div class="col-md-12"> 
                <form>
                  
                  <div class="">
                    <div>
                      <div class="form-group">
                        <label>Project Name</label>
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
                          <Form.Control as="select"  name="managerForm" value={this.state.managerForm} onChange={this.handleChange.bind(this)}>
                           <option>Select a person</option>
                           <option>German</option>
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
                          <Form.Control as="select"  name="assignedForm" value={this.state.assignedForm} onChange={this.handleChange.bind(this)}>
                           <option>Select a person</option>
                           <option>German</option>
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
                          <Form.Control as="select"  name="statusForm" value={this.state.statusForm} onChange={this.handleChange.bind(this)}> 
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
            <Button variant="danger" onClick={() => this.agregar()}>
              Create Project
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        )
    }
}

export default ModalAñadir;