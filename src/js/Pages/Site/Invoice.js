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
        setTimeout(this.checkForData,1000);
    }

    checkForData = () => {
        if(this.props.products.length === 0){
            this.props.history.push('/');
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
        const newInvoiceId = this.props.invoicesItems.length>0 ? lodash.last(this.props.invoicesItems).id + 1 : 1
        const invoice = {
            id : newInvoiceId,
            invoice_id : this.props.selectedInvoice,
            product_id : 0,
            quantity : 0
        }
        InvoicesAction.createNewInvoice(this.props.changeData,invoice);
    }

    selectCustumer = (e) => {
        let {invoice_list} = this.getCurrentItems(this.props.selectedInvoice);
        invoice_list.custumer_id = parseInt(e.target.value);
        InvoicesAction.updateInvoicesList(this.props.changeData,invoice_list);
    }

    changeDiscount = (e) => {
        let {invoice_list} = this.getCurrentItems(this.props.selectedInvoice);
        invoice_list.discount = parseInt(e.target.value);
        InvoicesAction.updateInvoicesList(this.props.changeData,invoice_list);
    }

    selectProduct(item,e){
        const product_id = parseInt(e.target.value);
        item.product_id = product_id;
        InvoicesAction.updateInvoice(this.props.changeData,item);
    }

    changeQuantity(item,e){
        const quantity = parseInt(e.target.value);
        item.quantity = quantity;
        InvoicesAction.updateInvoice(this.props.changeData,item);
    }

    getProductName = (product_id) => {
        const product = this.props.products.find(product => {
            return product.id === product_id
        })
        return lodash.get(product,'name','Undefined Product');
    }

    countTotal = () => {
        let total = 0;
        this.props.invoicesItems.forEach((item,key) => {
            if(this.props.selectedInvoice === item.invoice_id){
                const product = this.props.products.find(product => product.id === item.product_id);
                if(product){
                    total += item.quantity * product.price;
                }
            }
        })
        const {invoice_list} = this.getCurrentItems(this.props.selectedInvoice);
        return total - (lodash.get(invoice_list,'discount',0)/100 * total);
    }

    render() {
        const {invoice_list, currentCustumer} = this.getCurrentItems(this.props.selectedInvoice);
        return(
            <main>
                <nav className='NavigationBlock'>
                    <section className='NavigationBlockLinks'>
                        <Link to={`/`}>Restart</Link>
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
                                    <div>
                                        <Form horizontal key={key}>

                                            <FormGroup>
                                                <Col sm={12} className='InvoiceItem'>
                                                    <Col sm={2}>
                                                        <h4>Product : </h4>
                                                    </Col>
                                                    <Col sm={10}>
                                                        <FormControl 
                                                            componentClass="select" 
                                                            placeholder="Select product"
                                                            value={item.product_id}
                                                            onChange={this.selectProduct.bind(this,item)}>
                                                            {this.props.products.map((product,key) => {
                                                                return (
                                                                        <option 
                                                                            value={product.id}
                                                                            key={key}>
                                                                                {this.getProductName(product.id)}
                                                                            </option>
                                                                    )
                                                            })}
                                                        </FormControl>
                                                    </Col>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup>
                                                <Col sm={12} className='InvoiceItem'>
                                                    <Col sm={2}>
                                                        <h4>Quantity : </h4>
                                                    </Col>
                                                    <Col sm={10}>
                                                        <FormControl 
                                                                type="number" 
                                                                placeholder="Quantity"
                                                                value={item.quantity}
                                                                onChange = {this.changeQuantity.bind(this,item)}/>
                                                    </Col>
                                                    
                                                </Col>
                                            </FormGroup>

                                        </Form>
                                        <hr/>
                                    </div>
                                )
                            }
                        })
                    }
                    <h3>Total : {this.countTotal()}</h3>
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