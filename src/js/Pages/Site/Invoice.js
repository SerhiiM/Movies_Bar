import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../../Actions/InfoActions';
import * as cnst from '../../Common/constant';
import { connect } from 'react-redux';

class Invoice extends React.Component {

    getInfoFromServer = () => {
        Actions.getInfoAboutProject(this.props.onTodoClick)
    }

    onTaskCreate = (text) =>{
        this.props.onTodoClick({
            'type': cnst.ADD_TODO,
            'text':text,
            'id': this.props.todos.length
        })
    }

    onTaskClick = (id) =>{
        this.props.onTodoClick({
            'type': cnst.COMPLETE_TODO,
            'id': id
        })
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
            </main>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    serverInfo: state.infoFromServer
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