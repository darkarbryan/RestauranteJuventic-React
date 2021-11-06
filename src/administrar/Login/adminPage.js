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
         <div >
         
          <CarouselSlide/>
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
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
