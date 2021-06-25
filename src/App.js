import React, { Component } from "react";
import Listado from './pages/Listado';
import {BrowserRouter,Route, Link} from "react-router-dom";
import Navbarprincipal from './components/Navbar'
class App extends Component{
    constructor(){
        super();
    }
    
    render() {  
        return (
            <div>
                <div>        
                <BrowserRouter>
                <Navbarprincipal></Navbarprincipal> 
                    {/*REACT ROUTER DOM para el routeo */ }
                    <Route path="/" component={Listado} exact />
                </BrowserRouter>   
                </div>
            </div>
        )
    }
}

export default App;

