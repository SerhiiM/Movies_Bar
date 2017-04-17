import React from 'react';
import * as cnst from '../../Common/constant';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as InvoicesAction from '../../Actions/InvoicesAction';
import lodash from 'lodash';
import { Button } from "react-bootstrap";

class InvoicesList extends React.Component {

    componentDidMount() {
        setTimeout(this.checkForData,1000);
    }

    checkForData = () => {
        if(this.props.invoicesList.length === 0){
            this.props.history.push('/');
        }
    }
    
    createNewInvoiceList = () => {
        const newInvoiceId = lodash.last(this.props.invoicesList).id + 1
        this.props.selectInvoice({
            type: cnst.SELECT_INVOICE, 
            selectedInvoice: newInvoiceId
        });
        const params = {
            id:newInvoiceId,
            custumer_id:this.props.customerData[0].id,
            discount:0,
            total:0
        }
        InvoicesAction.createNewInvoiceList(this.props.receiveData,params);
        this.props.history.push('/invoice');
    }

    onSelectInvoice = (invoice) => {
        InvoicesAction.getInvoicesItems(this.props.receiveData,invoice.id);
        this.props.selectInvoice({
            type: cnst.SELECT_INVOICE, 
            selectedInvoice: invoice.id
        })
        this.props.history.push('/invoice');
    }
    
    getCustumerName = (custumer_id) => {
        const custumer = this.props.customerData.find(custumer => {
            return custumer.id === custumer_id
        })
        return lodash.get(custumer,'name','Undefined User');
    }

    render() {
        return (
            <main>
                <nav className='NavigationBlock'>
                    <section className='NavigationBlockLinks'>
                        <Link to={`/`}>Restart</Link>
                    </section>
                </nav>
                <section className='MainBlock'>
                    {
                        this.props.invoicesList.map((invoice,key) => {
                            return (
                                <div 
                                className='InvoicesList'
                                onClick={this.onSelectInvoice.bind(this,invoice)}
                                key={key}>
                                    <span>Invoice id : {invoice.id}</span><br/>
                                    <span>Custumer name : {this.getCustumerName(invoice.custumer_id)}</span><br/>
                                    <span>Discount : {invoice.discount}</span><br/>
                                    <span>Total : {invoice.total}</span><br/>
                                    <hr/>
                                </div>)
                        })
                    }
                    <div>
                        <Button bsStyle="primary" onClick={this.createNewInvoiceList}>
                            Create new invoice list
                        </Button>
                    </div>
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    invoicesList: state.invoicesList,
    customerData : state.customerData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveData: (state) => {
      dispatch(state)
    },
    selectInvoice: (state) => {
      dispatch(state)
    }
  }
}

InvoicesList = connect(
    mapStateToProps,
    mapDispatchToProps
    )(InvoicesList);
    
export default InvoicesList