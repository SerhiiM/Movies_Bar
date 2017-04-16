import React from 'react';
import * as cnst from '../../Common/constant';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as InvoicesAction from '../../Actions/InvoicesAction';

class InvoicesList extends React.Component {

    componentDidMount(){
        InvoicesAction.getInvoicesList(this.props.receiveInvoices)
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
                        this.props.invoicesList.map((el,key) => {
                            return (
                                <div>
                                    <span>{el.id}</span><br/>
                                    <span>{el.custumer_id}</span><br/>
                                    <span>{el.discount}</span><br/>
                                    <span>{el.total}</span><br/>
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
    invoicesList: [...state.invoicesList]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveInvoices: (state) => {
      dispatch(state)
    }
  }
}

InvoicesList = connect(
    mapStateToProps,
    mapDispatchToProps
    )(InvoicesList);
    
export default InvoicesList