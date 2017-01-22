import React from 'react';
import { Form, FormGroup, FormControl, Col, 
    ControlLabel, Button, HelpBlock,Checkbox } from "react-bootstrap";

export default class Login extends React.Component{

    state = {
        username: '',
        password: '',

        emailStatus:null,
        emailStatusMessage:'',
        passwordStatus:null,
        passwordStatusMessage:''      
    }
    changeUsername = (param) =>{
        const username = param.target.value;
        if(username.length === 0){
            this.setState({
                username:username,
                emailStatus:'error',
                emailStatusMessage:'You have to add email'
            })
        }else{
            this.setState({
                username:username,
                emailStatus:null,
                emailStatusMessage:''
            })
        }
    }
    changePassword = (param) => {
        const password = param.target.value;
        if(password.length === 0){
            this.setState({
                password:password,
                passwordStatus:'error',
                passwordStatusMessage:'You have to add email'
            })
        }else{
            this.setState({
                password:password,
                passwordStatus:null,
                passwordStatusMessage:''
            })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username,this.state.password);
        this.props.history.push('/home');
    }
    render(){
        const {emailStatus,emailStatusMessage,
            passwordStatus,passwordStatusMessage} = this.state;
        const isFormNotValid = (emailStatus === 'error' || passwordStatus === 'error') ? true : false;
        return (
            <div className='LoginBlock'>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalEmail"
                    validationState={emailStatus}>
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email"
                        onChange = {this.changeUsername}/>
                        <HelpBlock>{emailStatusMessage}</HelpBlock>
                    </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword"
                    validationState={passwordStatus}>
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password"
                        onChange = {this.changePassword}/>
                        <HelpBlock>{passwordStatusMessage}</HelpBlock>
                    </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" className='LoginBtn'
                            disabled={isFormNotValid}>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}