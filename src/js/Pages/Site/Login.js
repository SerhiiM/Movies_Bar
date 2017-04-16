import React from 'react';
import { Form, FormGroup, FormControl, Col, 
    ControlLabel, Button, HelpBlock,Checkbox } from "react-bootstrap";
import { connect } from 'react-redux';

class Login extends React.Component{

    state = {
        username: '',
        password: '',     
    }
    changeUsername = (param) =>{
        const username = param.target.value;
        this.setState({
                username:username,
            })
    }
    changePassword = (param) => {
        const password = param.target.value;
        this.setState({
                password:password,
            })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.info(`Username: ${this.state.username} , Password: ${this.state.password}`);
        this.props.history.push('/invoices_list');
    }
    render(){
        return (
            <div className='LoginBlock'>
                <h1 className='LoginTitle'>
                        Welcome back
                    </h1>
                <Form 
                    horizontal 
                    onSubmit={this.handleSubmit}>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={1}>
                            <div 
                                className='LoginIcons'>
                                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            </div>
                        </Col>
                        <Col sm={11}>
                            <FormControl 
                                type="email" 
                                placeholder="Email"
                                onChange = {this.changeUsername}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={1}>
                            <div 
                                className='LoginIcons LoginIconsShield'>
                                    <i class="fa fa-shield" aria-hidden="true"></i>
                            </div>
                        </Col>
                        <Col sm={11}>
                            <FormControl 
                                type="password" 
                                placeholder="Password"
                                onChange = {this.changePassword}/>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup>
                        <Col sm={12}>
                            <Button 
                                type="submit" 
                                className='LoginBtn Btn'>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    serverInfo: state.infoFromServer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCustumerData: (state) => {
      dispatch(state)
    }
  }
}

Login = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);
export default Login