import React from 'react';
import {IconButton,TextField,RaisedButton} from 'material-ui';
import { withRouter } from "react-router";
import withValidation from "../services/validation/withValidation";
import {checkLogin} from "../services/validation/checkLogin";
import Notifications from 'react-notification-system-redux';
import { connect } from 'react-redux';

function getNotification(error_message = ''){
    return {
        title: 'Login not right',
        message: error_message,
        position: 'tr',
        autoDismiss: 0,       
    }
}

class Login extends React.Component {
    state = {
        forgotFormVisibility: false
    };

    validatorTypes = checkLogin;

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.validate(error => {
            if (!error) {
                if(this.refs.email.input.value === 'admin@admin.com'){
                    if(localStorage.getItem('auth') !== 'admin'){
                        localStorage.setItem("path", '/');
                    }
                    localStorage.setItem("auth", 'admin');
                    this.props.router.push('loading');
                }else if(this.refs.email.input.value === 'dealer@dealer.com'){
                    if(localStorage.getItem('auth') !== 'dealer'){
                        localStorage.setItem("path", '/');
                    }
                    localStorage.setItem("auth", 'dealer');
                    this.props.router.push('loading');
                }else{
                    const notification = getNotification()
                    this.props.dispatcher(Notifications.error(notification))
                }
                
            }
        });
    };

    forgotPass = (e) => {
        e.preventDefault();
        this.setState({forgotFormVisibility: true});
        this.refs.email.input.value = '';
        this.refs.password.input.value = '';
        this.props.clearValidations();
    };

    getValidationState(field) {
        return this.props.isValid(field) ? null : 'error';
    }

    getValidatorData() {
        return {
            email: this.refs.email.input.value,
            password: this.refs.password.input.value
        };
    }

    renderErrors(field) {
        return this.props.getValidationMessages(field).map((message, index) => {
            return ({message});
        });
    }

    render() {
        const emailErrors = this.renderErrors('email').map((el, index) => `${index + 1}) ${el.props.children} `);
        const passwordErrors = this.renderErrors('password').map((el, index) => `${index + 1}) ${el.props.children} `);
        return (
            <div className="login-container">
                <div className={"login-wrap " + (this.state.forgotFormVisibility ? 'active' : '')}>
                    <IconButton
                        className="login-back-btn"
                        onClick={() => this.setState({forgotFormVisibility: false})}
                    >
                        <i className="material-icons">arrow_back</i>
                    </IconButton>
                    <div className="login-body">

                        <form className="login-inner" onSubmit={this.handleSubmit}>
                            <div className="container">
                                <div className="row">
                                    <div className="col s12">
                                        <TextField
                                            id="brand-sort"
                                            ref='email'
                                            floatingLabelStyle= {styles.floatingLabelStyle}
                                            errorText={emailErrors.length != 0 ? [...emailErrors] : ''}
                                            onBlur={this.props.handleValidation('email')}
                                            style={{margin: '0 0 -4px 0'}}
                                            fullWidth={true}
                                            hintText="Введите почту"
                                            floatingLabelText="Електронна пошта"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <TextField
                                            id="brand-sort"
                                            ref='password'
                                            floatingLabelStyle= {styles.floatingLabelStyle}
                                            onBlur={this.props.handleValidation('password')}
                                            errorText={passwordErrors.length != 0 ? [...passwordErrors] : ''}
                                            style={{margin: '0 0 20px 0'}}
                                            fullWidth={true}
                                            type='password'
                                            hintText="Введите пароль"
                                            floatingLabelText="Пароль"
                                        />
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col s12">
                                        <RaisedButton
                                            fullWidth={true}
                                            style={{marginBottom: '24px'}}
                                            label="Увійти"
                                            type='submit'
                                        />
                                    </div>
                                    <div className="col s12">
                                        <a
                                            className="forgetLink"
                                            onClick={(e) => this.forgotPass(e)}
                                        >
                                            Забули пароль?
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className='login-hidden-wrap'>
                            <div className="container">
                                <div className="row">
                                    <div className="col s12">
                                        <p>Будь ласка, введіть вашу адресу електронної пошти. Ви отримаєте лист з посиланням для створення нового пароля.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <TextField
                                            id="brand-sort"
                                            style={{margin: '0 0 20px 0'}}
                                            fullWidth={true}
                                            hintText="Електронна пошта"
                                            floatingLabelText="Пошта"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <RaisedButton
                                            fullWidth={true}
                                            label="Відновити пароль"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    floatingLabelStyle: {
        fontSize: '15px',
    },
};

const stateToProps = (state) => {
  return {
  }
}

const dispatchToProps = (dispatch) => {
  return {
    dispatcher: (state) => {
      dispatch(state)
    },
  }
}

Login = connect(
    stateToProps,
    dispatchToProps
    )(withValidation(Login));


export default withRouter(Login);

