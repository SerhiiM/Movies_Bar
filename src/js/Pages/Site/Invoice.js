import React from 'react';
import {Link} from 'react-router';
import * as cnst from '../../Common/constant';
import { connect } from 'react-redux';
import lodash from 'lodash';
import { Form, FormGroup, FormControl, Col, 
    ControlLabel, Button, HelpBlock,Checkbox,FieldGroup} from "react-bootstrap";
import * as InvoicesAction from '../../Actions/InvoicesAction';

class Invoice extends React.Component {

    componentDidMount() {
        if(this.props.products.length === 0){
            //this.props.history.push('/');
        }
    }
    
    getCurrentItems = (invoice_id) => {
        const invoice_list = this.props.invoicesList.find(inv => inv.id === invoice_id)||{};
        const currentCustumer = this.props.customerData.find(cus => cus.id === invoice_list.custumer_id)||{};
        return {invoice_list,currentCustumer};
    }

    goBack = () => {
        this.props.history.push('/invoices_list');
    }

    addNewInvoice = () => {
        const newInvoiceId = lodash.last(this.props.invoicesItems).id + 1
        const invoice = {
            id : newInvoiceId,
            invoice_id : this.props.selectedInvoice,
            product_id : 0,
            quantity : 0
        }
        this.props.changeData({
            type: cnst.ADD_NEW_INVOICE_ITEM, 
            invoice_item: invoice
        })
    }

    selectCustumer = (e) => {
        let {invoice_list} = this.getCurrentItems(this.props.selectedInvoice);
        invoice_list.custumer_id = parseInt(e.target.value);
        InvoicesAction.updateCustumer(this.props.changeData,invoice_list);
    }

    changeDiscount = (e) => {
        let {invoice_list} = this.getCurrentItems(this.props.selectedInvoice);
        invoice_list.discount = parseInt(e.target.value);
        InvoicesAction.updateCustumer(this.props.changeData,invoice_list);
    }

    getProductName = (product_id) => {
        const product = this.props.products.find(product => {
            return product.id === product_id
        })
        return lodash.get(product,'name','Undefined Product');
    }

    render() {
        const {invoice_list, currentCustumer} = this.getCurrentItems(this.props.selectedInvoice);
        return(
            <main>
                <nav className='NavigationBlock'>
                    <section className='NavigationBlockLinks'>
                        <Link to={`/invoices_list`}>Invoices List</Link>
                        <Link to={`/`}>Login</Link>
                    </section>
                </nav>
                <section className='MainBlock'>
                    <div>
                        <Col sm={1}>
                            <h4>Custumer:</h4>
                        </Col>
                        <Col sm={5}>
                            <FormControl 
                                componentClass="select" 
                                placeholder="Select custumer"
                                value={currentCustumer.id}
                                onChange={this.selectCustumer}>
                                {this.props.customerData.map((custumer,key) => {
                                    return (
                                            <option 
                                                value={custumer.id}
                                                key={key}>
                                                    {custumer.name}
                                                </option>
                                        )
                                })}
                            </FormControl>
                        </Col>
                        <Col sm={1}>
                            <h4>Discount:</h4>
                        </Col>
                        <Col sm={5}>
                            <FormControl 
                                    type="number" 
                                    placeholder="Discount"
                                    value={invoice_list.discount}
                                    onChange = {this.changeDiscount}/>
                        </Col>
                    </div>
                    {
                        this.props.invoicesItems.map((item,key) => {
                            if(this.props.selectedInvoice === item.invoice_id){
                                return (
                                    <Col sm={12} key={key} className='InvoiceItem'>
                                        <span>Item id : {item.id}</span><br/>
                                        <span>Invoice id : {item.invoice_id}</span><br/>
                                        <span>Product name : {this.getProductName(item.product_id)}</span><br/>
                                        <span>Quantity : {item.quantity}</span><br/>
                                        <hr/>
                                    </Col>
                                )
                            }
                        })
                    }
                    <Col sm={12}>
                        <Button 
                            bsStyle="primary" 
                            onClick={this.goBack} 
                            className='BtnBlock'>
                                Go back
                        </Button>
                        <Button 
                            bsStyle="success" 
                            onClick={this.addNewInvoice} 
                            className='BtnBlock'>
                                Add new
                        </Button>
                    </Col>
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    invoicesItems: state.invoicesItems,
    products: state.products,
    selectedInvoice:state.selectedInvoice,
    customerData : state.customerData,
    invoicesList: state.invoicesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeData: (state) => {
      dispatch(state)
    }
  }
}

Invoice = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Invoice);
export default Invoice