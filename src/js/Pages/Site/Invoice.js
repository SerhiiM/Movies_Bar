import React from 'react';
import {Link} from 'react-router';
import * as cnst from '../../Common/constant';
import { connect } from 'react-redux';
import lodash from 'lodash';

class Invoice extends React.Component {

    componentDidMount() {
        if(this.props.products.length === 0){
            //this.props.history.push('/');
        }
    }

    getProductName = (product_id) => {
        const product = this.props.products.find(product => {
            return product.id === product_id
        })
        return lodash.get(product,'name','Undefined Product');
    }
    render() {
        return(
            <main>
                <nav className='NavigationBlock'>
                    <section className='NavigationBlockLinks'>
                        <Link to={`/invoices_list`}>Invoices List</Link>
                        <Link to={`/`}>Login</Link>
                    </section>
                </nav>
                <section className='MainBlock'>
                    {
                        this.props.invoicesItems.map((item,key) => {
                            if(this.props.selectedInvoice === item.invoice_id){
                                return (
                                    <div 
                                    key={key}>
                                        <span>Item id : {item.id}</span><br/>
                                        <span>Invoice id : {item.invoice_id}</span><br/>
                                        <span>Product name : {this.getProductName(item.product_id)}</span><br/>
                                        <span>Quantity : {item.quantity}</span><br/>
                                        <hr/>
                                    </div>
                                )
                            }
                        })
                    }
                    <div>
                        <Link to={`/invoices_list`}>Back</Link>
                    </div>
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    invoicesItems: state.invoicesItems,
    products: state.products,
    selectedInvoice:state.selectedInvoice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (state) => {
      dispatch(state)
    }
  }
}

Invoice = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Invoice);
export default Invoice