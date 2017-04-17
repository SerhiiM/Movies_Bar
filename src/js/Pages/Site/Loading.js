import React from 'react';
import * as cnst from '../../Common/constant';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as InvoicesAction from '../../Actions/InvoicesAction';
import * as CustumerAction from '../../Actions/CustumerAction';
import * as ProductsAction from '../../Actions/ProductsAction';

class Loading extends React.Component {

    componentDidMount(){
        this.getStartData();
    }

    getStartData = () => {
        InvoicesAction.getInvoicesList(this.props.receiveData);
        CustumerAction.getCustumers(this.props.receiveData);
        ProductsAction.getProducts(this.props.receiveData);
        this.props.history.push('/invoices_list');
    }

    render() {
        return (
            <main>
                
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
    },
  }
}

Loading = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Loading);
    
export default Loading