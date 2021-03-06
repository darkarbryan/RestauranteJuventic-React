import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../administrar/_helpers';
import { alertActions } from '../administrar/_actions';
import { PrivateRoute } from '../administrar/_components';
import { HomePage } from '../HomePage';
import { adminPage } from '../administrar/Login/adminPage.js';
import { LoginPage } from '../administrar/Login/LoginPage';
import { RegisterPage } from '../administrar/RegisterPage';
import { Sedes } from '../components/Sedes/Sedes';
import { menu } from '../components/Sedes/menu.js';
import { Carrito } from '../components/Sedes/Carrito.js';
import { Info } from '../components/Sedes/info.js';
import { Login } from '../components/login/login.jsx';
import { Admin } from '../components/login/Administrador.jsx';
import { Usuario } from '../components/login/usuario.js';
import { Logout } from '../components/login/logout.jsx';


  
import { ConsultarUser } from '../components/login/Empleado/getEmpleado.jsx';
import { Register } from '../components/login/registrar.jsx';
import { Email } from '../components/Contactar/Email.js';
import { Servicios } from '../components/Servicios/Servicios.js';
 import { Panel } from '../administrar/Login/panel.js';
class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className=" ">
                    <div className=" ">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/admin" component={adminPage} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <Route path="/administrador" component={Admin} /> 
                                <Route path="/contacto" component={Email} />
                                <Route path="/servicios" component={Servicios} />
                                <Route path="/platos" component={Sedes} />
                                <Route path="/menu" component={menu} />
                                <Route path="/info" component={Info} />
                                <Route path="/usuario" component={Usuario} />
                                <Route path="/logout" component={Logout} />

 
                                 
                                <Route path="/" component={HomePage}/> 
                                 
                                 
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router> 
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
