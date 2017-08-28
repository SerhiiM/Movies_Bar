import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';

class StatusBar extends React.Component {
    render() {
        const { progress_bars } = this.props;
        if(progress_bars.length > 0){
            return (
                <section className = 'status_bar'>
                    <div className = 'status_bar_block'>
                        {progress_bars.map(el=>{
                            return(
                                <div>
                                    <span>{el.title}</span>
                                    <LinearProgress 
                                        className = 'progress_bar' 
                                        mode="determinate" 
                                        value={el.progress} />
                                </div>
                            )
                        })}
                    </div>
                </section>
            );
        }else{
            return <div></div>
        }
    }
}


StatusBar.propTypes = {
  progress_bars: PropTypes.array
};

const stateToProps = (state) => {
  return {
    progress_bars: state.progress_bars
  }
}

StatusBar = connect(
    stateToProps
    )(StatusBar);

export default (StatusBar);