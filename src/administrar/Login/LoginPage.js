import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
 
import { NavBar } from "../../components/NavBar/Navbar.js";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className=" ">
                 


                <NavBar />
                <section id="specials" class="specials">
        <div class=" ">

          <div class="section-title">
            <h2> <span>Login Administrativo</span></h2>
             
                  
                           
                  Sistema de control, solo personas autorizadas! <br/> <b>Sistema de acceso en dos pasos</b>  
<br />  
            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1"> Login </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-2"> Administrar </a>
            </li>

                </ul>
              </div>

              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8">
                       
               <br />
           
            
           <form name="form" onSubmit={this.handleSubmit}>
               <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                   <label htmlFor="username">Usuario</label>
                   <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                   {submitted && !username &&
                       <div className="help-block">Usuario requerido!</div>
                   }
               </div>
               <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                   <label htmlFor="password">Contraseña</label>
                   <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                   {submitted && !password &&
                       <div className="help-block"> Contraseña requerida!</div>
                   }
               </div>  <br /> 
               <div className="form-group">
                   <button className="btn btn-primary">Iniciar Sesion</button>
                   {loggingIn &&
                       <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                   }
                   <Link to="/register" className="btn btn-link">Registrar</Link>
                    <br /> <br /> <br />
               </div>
           </form>

				
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  
                </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">


                       </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8">
                         
            
           <form name="form" onSubmit={this.handleSubmit}>
               <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                   <label htmlFor="username">Usuario</label>
                   <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                   {submitted && !username &&
                       <div className="help-block">Usuario requerido!</div>
                   }
               </div>
               <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                   <label htmlFor="password">Contraseña</label>
                   <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                   {submitted && !password &&
                       <div className="help-block"> Contraseña requerida!</div>
                   }
               </div>  <br /> 
               <div className="form-group">
                   <button className="btn btn-primary">Iniciar Sesion</button>
                   {loggingIn &&
                       <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                   }
                     <br /> <br /> <br />
               </div>
           </form>
                        </div> </div> </div> </div> </div> 
                         </div> </div> </div> 
                      
      </section> 
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };
