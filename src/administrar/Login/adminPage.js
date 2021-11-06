 import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

   
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
 
import { LoginPage } from './LoginPage';
import { RegisterPage } from '../RegisterPage';
 import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.scss'
import { NavBar } from "../../components/NavBar/Navbar2";
import { CarouselSlide } from "../../components/Carousel/Carousel"
import { main } from "../../components/Carousel/main.js"
  

import { Info } from '../../components/Servicios/Info-servicios.js';
import { Sedes } from '../../components/Sedes/Sedes';
import { Email } from '../../components/Contactar/Email.js';
import { Servicios } from '../../components/Servicios/Servicios.js';
 import { Panel } from './panel.js';
 
class adminPage extends React.Component { 
 componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }


    render() {
     const { user, users } = this.props;
        
        return (
       <>
         <Panel/>

                 
          </>
        );
    }
    
}
   

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(adminPage);
export { connectedHomePage as adminPage };
