import React from 'react';
import * as cnst from '../../Common/constant';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as InvoicesAction from '../../Actions/InvoicesAction';

class InvoicesList extends React.Component {

    onSelectInvoice = (invoice) => {
        InvoicesAction.getInvoicesItems(this.props.receiveData,invoice.id);
        this.props.history.push('/invoice');
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
                <section className='HomePageBlock'>
                    {
                        this.props.invoicesList.map((invoice,key) => {
                            return (
                                <div 
                                onClick={this.onSelectInvoice.bind(this,invoice)}
                                key={key}>
                                    <span>Invoice id : {invoice.id}</span><br/>
                                    <span>Custumer id : {invoice.custumer_id}</span><br/>
                                    <span>Discount : {invoice.discount}</span><br/>
                                    <span>Total : {invoice.total}</span><br/>
                                    <hr/>
                                </div>)
                        })
                    }
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    invoicesList: state.invoicesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveData: (state) => {
      dispatch(state)
    }
  }
}

InvoicesList = connect(
    mapStateToProps,
    mapDispatchToProps
    )(InvoicesList);
    
export default InvoicesList