import React from 'react';
import * as cnst from '../../Common/constant';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as InvoicesAction from '../../Actions/InvoicesAction';
import lodash from 'lodash';

class InvoicesList extends React.Component {

    componentDidMount() {
        if(this.props.invoicesList.length===0){
            //this.props.history.push('/');
        }
    }

    createNewInvoice = () => {
        const newInvoiceId = lodash.last(this.props.invoicesList).id + 1
        this.props.selectInvoice({
            type: cnst.SELECT_INVOICE, 
            selectedInvoice: newInvoiceId
        })
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
                        <Link to={`/invoice`}>Invoice</Link>
                        <Link to={`/`}>Login</Link>
                    </section>
                </nav>
                <section className='MainBlock'>
                    {
                        this.props.invoicesList.map((invoice,key) => {
                            return (
                                <div 
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
                        <button
                        onClick={this.createNewInvoice}>
                            Create new invoice
                        </button>
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