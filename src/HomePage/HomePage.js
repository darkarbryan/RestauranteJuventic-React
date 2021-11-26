import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../administrar/_actions';
import { RegisterPage } from '../administrar/RegisterPage';
 import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss'
import { NavBar2 } from "../components/NavBar/Navbar2";
import { CarouselSlide } from "../components/Carousel/Carousel"
import { main } from "../components/Carousel/main.js"
   
import { Sedes } from '../components/Sedes/Sedes';
import { Email } from '../components/Contactar/Email.js';
import { Servicios } from '../components/Servicios/Servicios.js';
import { Info } from '../components/Sedes/info.js';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
        
          <div className="jumbotron">
                <div className=" ">
             <main/>
 <NavBar2 />
             <CarouselSlide/>
   
      
      <Info/>
       <br/>
         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
    <br/><br/><br/>
         
   
      <br/>
      <hr/>
  

      <br/>
      <hr/>

       
            </div>   </div>
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

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
